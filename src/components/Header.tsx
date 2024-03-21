import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-400">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl uppercase">
                <Link to="/">csaw blog</Link>
                
              </h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
