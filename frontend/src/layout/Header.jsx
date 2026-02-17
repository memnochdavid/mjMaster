import React from 'react';
import { Link } from 'react-router-dom';
import viteLogo from '/vite.svg';

const Header = () => {
  return (
    <header className="bg-indigo-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8" src={viteLogo} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-900">Project Skeleton</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
              <a
                href="https://localhost:9443/api/hello"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                target="_blank"
                rel="noreferrer"
              >
                API Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
