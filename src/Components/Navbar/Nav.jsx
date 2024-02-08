import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" mt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className='text-3xl'>MK</h2>
        </div>
        <div className="hidden sm:block">
          <div className="flex space-x-4">
            {['Home', 'About', 'Skills', 'Project', 'Contact'].map((section) => (
              <Link
                key={section}
                to={section}
                duration={600}
                smooth={true}
                className="cursor-pointer text-white hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white "
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              // Render cross icon when menu is open
              
              <RxCross2 size={20} />
            ) : (
              // Render hamburger icon when menu is closed
              <RxHamburgerMenu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} text-center`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {['Home', 'About', 'Skills', 'Project', 'Contact'].map((section) => (
            <Link
              key={section}
              to={section}
              duration={600}
              smooth={true}
              className="hover:bg-gray-700 text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
