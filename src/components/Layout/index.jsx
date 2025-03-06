import Header from '../Header';
import React from 'react';
import LandingPage from '../LandingPage';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen  bg-background">
      <Header />
      <main className="flex-grow mt-20 relative w-11/12 md:w-10/12 mx-auto">
        <LandingPage />
      </main>
    </div>
  );
}

export default Layout;
