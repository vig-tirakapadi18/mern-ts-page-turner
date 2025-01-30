import React, { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = (): React.JSX.Element => {
  return (
    <header className="bg-stone-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="text-stone-300">
            PageTurner
          </Link>
        </span>
        <span className="flex space-x-2 bg-stone-300 rounded-md items-center text-stone-700 px-3 font-bold hover:opacity-90 active:scale-95 transition-all">
          <Link to="/sign-up" className="">
            Sign Up
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
