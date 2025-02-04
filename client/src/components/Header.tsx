import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useAppContext } from "../context/AppContext";

const loggedInLinkClasses = "text-stone-300 font-bold text-xl hover:underline";

const Header: FC = (): React.JSX.Element => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="bg-stone-800 py-6 shadow-xl z-10">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="text-stone-300 flex gap-1">
            <img src={logo} alt="" width={36} />
            <span>PageTurner</span>
          </Link>
        </span>
        {isLoggedIn ? (
          <div className="flex items-center justify-center gap-8">
            <Link to="/my-books" className={loggedInLinkClasses}>
              My Books
            </Link>
            <Link to="/my-stores" className={loggedInLinkClasses}>
              My Stores
            </Link>
            <button className="bg-stone-300 px-4 py-2 rounded-lg cursor-pointer hover:opacity-90">
              Sign Out
            </button>
          </div>
        ) : (
          <span className="flex space-x-2 bg-stone-300 rounded-md items-center text-stone-700 px-3 font-bold hover:opacity-90 active:scale-95 transition-all">
            <Link to="/sign-up" className="">
              Sign Up
            </Link>
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
