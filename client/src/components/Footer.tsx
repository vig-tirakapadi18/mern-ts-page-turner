import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { footerLinks } from "../lib/footerLinks";

const Footer: FC = (): React.JSX.Element => {
  return (
    <footer className="bg-stone-800 w-full py-4 px-6 text-stone-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-bold text-2xl"
        >
          <img
            src={logo}
            alt="PageTurner Logo"
            width={40}
            className="drop-shadow-lg"
          />
          <span>PageTurner</span>
        </Link>

        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-xl hover:text-white transition-colors duration-200"
              aria-label={link.label || "Social link"}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 text-sm sm:text-base">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="hover:underline">
            T & C
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
