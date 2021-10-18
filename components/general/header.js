import React from 'react';

// logo
import { Logo } from '../../assets/img/svg';
// import { ReactComponent as Logo } from "/icons/logo.svg";

// component
import Cart from './cart';

const Header = () => {
  return (
    <div className="flex sticky top-0 bg-white z-40  justify-between items-center pt-7 sm:pt-12 pb-6 sm:pb-8 border-b-2 border-[#E4E4E4] mx-auto container mb-8 sm:mb-12 px-8 sm:px-4">
      {/* Logo */}
      <Logo className="transform scale-[80%]	sm:scale-100" />

      {/* Cart */}
      <Cart />
    </div>
  );
};

export default Header;
