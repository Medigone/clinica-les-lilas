import React from 'react';

const STEM_FROM_SRC = /^\/assets\/(.+)\.(png|jpe?g)$/i;

/** Jeux d’images pré-générés (voir scripts/optimize-hero-images.mjs) */
const WEBP_WIDTHS_BY_STEM = {
  'bg_hero_2': [640, 960, 1280, 1600],
  'about-bg': [480, 800, 1280, 1600],
  iv_therapy_bg: [640, 960, 1280, 1600],
};

function stemFromPngSrc(pngSrc) {
  const m = pngSrc.match(STEM_FROM_SRC);
  return m ? m[1] : null;
}

/**
 * Fond en object-cover : WebP responsives + repli PNG.
 */
export default function ResponsiveCoverImage({
  pngSrc,
  sizes,
  className,
  widths: widthsOverride,
  /** Hero / LCP : eager + fetchpriority=high (ne pas combiner avec loading lazy) */
  priority = false,
  fetchPriority: fetchPriorityProp,
  loading: loadingProp,
  decoding = 'async',
  'aria-hidden': ariaHidden = true,
}) {
  const stem = stemFromPngSrc(pngSrc);
  const widths = widthsOverride ?? (stem ? WEBP_WIDTHS_BY_STEM[stem] : null);

  const loading = priority ? 'eager' : (loadingProp ?? 'lazy');
  const fetchPriority = priority ? 'high' : fetchPriorityProp;

  const imgProps = {
    alt: '',
    className,
    sizes,
    loading,
    decoding,
    fetchPriority,
    'aria-hidden': ariaHidden,
  };

  if (!stem || !widths?.length) {
    return <img src={pngSrc} {...imgProps} />;
  }

  const webpSrcSet = widths.map((w) => `/assets/${stem}-${w}.webp ${w}w`).join(', ');

  return (
    <picture className="block h-full w-full">
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img src={pngSrc} {...imgProps} />
    </picture>
  );
}

export const SIZES_FULL_VIEWPORT = '100vw';
export const SIZES_HOME_CARE_GRID = '(max-width: 768px) 100vw, 50vw';
export const SIZES_TRAITEMENTS_GRID = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
