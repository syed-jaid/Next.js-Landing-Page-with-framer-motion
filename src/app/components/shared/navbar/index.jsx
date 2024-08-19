import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center  py-4 px-8 bg-white ">
      <div className="flex-shrink-0">
        <img
          src="/assets/images/logo.svg"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      <div className="hidden md:flex ml-[8rem] space-x-8 items-center">
        <a href="/" className="text-lg font-medium text-gray-800">
          Home
        </a>
        <a href="/faq" className="text-lg font-medium text-gray-400">
          FAQ
        </a>
        <a href="/contact" className="text-lg font-medium text-gray-400">
          Contact us
        </a>

        <div className="flex items-center space-x-1 text-lg font-medium text-gray-400 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10C22 6.477 17.523 2 12 2zm0 2c.883 0 1.733.152 2.529.428-1.75 1.238-2.717 3.286-2.905 5.572H7.084C7.576 6.757 9.576 4 12 4zm-4.839 8H9.55c.186 2.285 1.153 4.332 2.903 5.572A7.977 7.977 0 017.161 12zm9.68 0h2.39a7.978 7.978 0 01-4.29 5.572c1.75-1.238 2.717-3.287 2.904-5.572zm0-2h-2.39c-.187-2.285-1.153-4.332-2.903-5.572a7.978 7.978 0 014.29 5.572zM12 20c-.883 0-1.733-.152-2.529-.428 1.75-1.238 2.717-3.287 2.905-5.572h4.54c-.492 3.243-2.492 6-4.916 6zM4.549 10h4.54C9.274 7.715 8.307 5.668 6.557 4.428A7.978 7.978 0 004.55 10z" />
          </svg>
          <span>Eng</span>
          <img
            src="/assets/images/nav-dropdown.svg"
            alt="Logo"
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>

      <div className="flex space-x-4 items-center ml-auto">
        <button className="border-2 border-pink-300 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-50">
          Sign up
        </button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300">
          Let's search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
