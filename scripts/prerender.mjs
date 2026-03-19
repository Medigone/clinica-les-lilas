import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { getPrerenderRoutes } from './seo-paths.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const HOST = '127.0.0.1';
const PORT = 4173;
const BASE_URL = `http://${HOST}:${PORT}`;
const ROUTES = getPrerenderRoutes();

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function getBrowserCandidates() {
  return [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    process.env.CHROME_BIN,
    process.env.CHROMIUM_BIN,
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/snap/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);
}

async function launchBrowser() {
  const launchBaseOptions = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
  const attempted = [];

  for (const executablePath of getBrowserCandidates()) {
    if (!(await pathExists(executablePath))) continue;

    try {
      return await puppeteer.launch({ ...launchBaseOptions, executablePath });
    } catch (error) {
      attempted.push(`${executablePath}: ${error.message}`);
    }
  }

  try {
    return await puppeteer.launch(launchBaseOptions);
  } catch (error) {
    attempted.push(`bundled-browser: ${error.message}`);
  }

  process.stderr.write(
    [
      '[prerender] Aucun navigateur compatible trouve; prerender ignore.',
      'Le build Vite continue et le sitemap sera quand meme genere.',
      attempted.length ? attempted.join(' | ') : 'Aucune tentative de lancement reussie.',
    ].join(' '),
  );

  return null;
}

async function resolveFilePath(requestPath) {
  const pathname = decodeURIComponent(new URL(requestPath, BASE_URL).pathname);
  const directPath = path.join(DIST_DIR, pathname);

  if (await pathExists(directPath)) {
    const stat = await fs.stat(directPath);
    if (stat.isDirectory()) {
      const indexPath = path.join(directPath, 'index.html');
      if (await pathExists(indexPath)) return indexPath;
    } else {
      return directPath;
    }
  }

  if (pathname !== '/') {
    const htmlPath = path.join(DIST_DIR, `${pathname}.html`);
    if (await pathExists(htmlPath)) return htmlPath;
  }

  return path.join(DIST_DIR, 'index.html');
}

function createStaticServer() {
  return http.createServer(async (req, res) => {
    try {
      const filePath = await resolveFilePath(req.url || '/');
      const ext = path.extname(filePath).toLowerCase();
      const content = await fs.readFile(filePath);

      res.writeHead(200, {
        'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      });
      res.end(content);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(String(error));
    }
  });
}

function getOutputPath(route) {
  if (route === '/') {
    return path.join(DIST_DIR, 'index.html');
  }

  return path.join(DIST_DIR, route.replace(/^\/+/, ''), 'index.html');
}

async function writeRenderedRoute(route, html) {
  const outputPath = getOutputPath(route);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, 'utf8');
}

async function waitForApp(page) {
  await page.waitForSelector('#root', { timeout: 15000 });
  await page.waitForSelector('#root > *', { timeout: 15000 });
  await page.waitFor(750);
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', (request) => {
    const requestUrl = new URL(request.url());
    if (requestUrl.origin !== BASE_URL && requestUrl.protocol !== 'data:') {
      request.abort();
      return;
    }
    request.continue();
  });
  page.on('pageerror', (error) => {
    process.stderr.write(`[pageerror:${route}] ${error.stack || error.message}\n`);
  });

  await page.goto(`${BASE_URL}${route}`, {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  await waitForApp(page);

  const html = await page.content();
  await writeRenderedRoute(route, html);
  await page.close();
}

async function main() {
  const server = createStaticServer();

  await new Promise((resolve) => server.listen(PORT, HOST, resolve));

  const browser = await launchBrowser();

  if (!browser) {
    await new Promise((resolve) => server.close(resolve));
    return;
  }

  try {
    for (const route of ROUTES) {
      await prerenderRoute(browser, route);
      process.stdout.write(`prerendered ${route}\n`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
