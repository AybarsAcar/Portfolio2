import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClose = () => {
    setShowDropdown(false);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-sm">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mx-8 sm:text-4xl">Aybars.</h1>

          {/* MENU ITEMS FOR LARGE SCREEN */}
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} offset={0} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" smooth={true} offset={-150} duration={500}>
                About
              </Link>
            </li>

            <li>
              <Link to="support" smooth={true} offset={-150} duration={500}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="platforms" smooth={true} offset={-150} duration={500}>
                Blogs
              </Link>
            </li>

            <li>
              <Link to="pricing" smooth={true} offset={-150} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* HAMBURGER MENU */}
        <div className="md:hidden mx-8">
          {!showDropdown ? (
            <MenuIcon className="w-5 cursor-pointer" onClick={toggleDropdown} />
          ) : (
            <XIcon className="w-5 cursor-pointer" onClick={toggleDropdown} />
          )}
        </div>
      </div>

      {/* DROPDOWN MENU */}
      {showDropdown ? (
        <ul className="absolute bg-zinc-200 w-full px-8">
          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              to="home"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClose}
            >
              Home
            </Link>
          </li>
          <li className="md:hidden border-b-2 border-zinc-300 w-full">
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClose}
            >
              About
            </Link>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              to="support"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClose}
            >
              Project
            </Link>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              to="platforms"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClose}
            >
              Blogs
            </Link>
          </li>

          <li className="border-b-2 border-zinc-300 w-full">
            <Link
              to="pricing"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleClose}
            >
              Contact
            </Link>
          </li>
          <li>
            <div className="flex justify-center">
              <div className="bg-[#0A66C2] text-white mx-8 p-2 rounded-lg">
                <a
                  href="https://www.linkedin.com/in/aybarsacar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={40} />
                </a>
              </div>

              <div className="bg-[#171515] text-white mx-8 p-2 rounded-lg">
                <a
                  className="flex justify-between items-center"
                  href="https://github.com/AybarsAcar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub size={40} />
                </a>
              </div>
              <div className="bg-[#1DA1F2] text-white mx-8 p-2 rounded-lg">
                <a
                  className="flex justify-between items-center"
                  href="https://twitter.com/AybarsAcar1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiTwitter size={40} />
                </a>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
