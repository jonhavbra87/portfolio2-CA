import Header from '../Header';
import Footer from '../Footer';
import React from 'react';
import LandingPage from '../LandingPage';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <LandingPage className="flex-grow" />
      <Footer />
    </div>
  );
}

export default Layout;
