import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import StickyContactBar from './StickyContactBar';
import SchemaOrg from './SchemaOrg';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SchemaOrg />
      <Header />
      <main className="flex-grow pt-[56px] md:pt-[60px] pb-24 md:pb-0 relative">
        <div
          className="absolute inset-0 -z-10 min-h-full"
          style={{
            background: 'linear-gradient(135deg, #F5F0E8 0%, rgba(248,245,240,0.9) 40%, #ffffff 100%)',
          }}
        />
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton floating />
      <StickyContactBar />
    </div>
  );
};

export default Layout;
