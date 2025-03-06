// import NavBar from '../NavBar';
import React from 'react';
import Logo from '../../assets/bu_logo.svg';

function Header() {
  return (
    <header className="bg-pink-400 w-full flex items-center fixed h-20 mb-20 z-50">
      <div className="w-11/12 lg:w-10/12  mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-14" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          {/* <NavBar /> */}
          <p className="text-black">header</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
