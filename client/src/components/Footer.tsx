import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { footerLinks } from "../lib/footerLinks";

const Footer: FC = (): React.JSX.Element => {
  return (
    <div className="absolute bottom-0 bg-stone-700 w-screen max-h-16 py-2 flex justify-around items-center">
      <span className="text-3xl text-white font-bold tracking-tight">
        <Link to="/" className="text-stone-300 flex gap-1">
          <img src={logo} alt="" width={36} />
          <span>PageTurner</span>
        </Link>
      </span>
      <div className="flex gap-2 group justify-center items-center ">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            className="text-stone-300 text-2xl hover:text-stone-100"
            to={link.href}
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-1 font-semibold text-stone-300">
        <span className="hover:underline cursor-pointer">Privacy Policy</span>
        <span className="hover:underline cursor-pointer">T & C</span>
      </div>
    </div>
  );
};

export default Footer;
