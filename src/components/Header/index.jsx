import React from 'react';
import Logo from '../../assets/logo_ja.svg';
import { Copyright } from 'lucide-react';

function Header() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <header className="bg-background w-full flex items-center static h-20 z-50 border-b-2 border-gray-800" role="banner">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="flex items-center justify-start">
          <img
            onClick={ScrollTop}
            src={Logo}
            alt="Jon Are Logo - Back to top"
            className="h-14 cursor-pointer"
            role="button"
            tabIndex="0"
            aria-label="Back to top of page"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                ScrollTop();
              }
            }}
          />
        </div>
        <div className="text-sm">
          <div className="flex flex-row gap-2 items-center text-white" aria-label="Copyright information">
            <Copyright aria-hidden="true" />
            <p>Jon Are Haveråen-Brattås</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;