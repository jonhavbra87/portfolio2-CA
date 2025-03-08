// import NavBar from '../NavBar';
import React from 'react';
import Logo from '../../assets/logo_ja.svg';
import { Copyright } from 'lucide-react';

function Header() {
  const ScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-background w-full flex items-center fixed h-20 z-50 border-b-2 border-gray-800">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="flex items-center justify-start ">
          <img
            onClick={ScrollTop}
            src={Logo}
            alt="Logo"
            className="h-14 cursor-pointer"
          />
        </div>
        <div className="text-sm">
          {/* <NavBar /> */}
          <div className="flex flex-row gap-2 items-center text-white">
            <Copyright />
            <p>Jon Are Haveråen-Brattås</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
