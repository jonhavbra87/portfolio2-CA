import Header from '../Header';
import React from 'react';
import LandingPage from '../LandingPage';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <Header />
      <main className="flex-grow relative">
        <LandingPage />
      </main>
    </div>
  );
}

export default Layout;