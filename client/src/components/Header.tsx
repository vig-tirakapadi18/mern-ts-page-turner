import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import { useAppContext } from "../context/AppContext";
import { signOut } from "../api/apiClient";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { RootState } from "../redux/store";
import { RiMenu2Fill } from "react-icons/ri";

const Header: FC = (): React.JSX.Element => {
  const { showToast } = useAppContext();
  const isLoggedIn = useSelector<RootState>((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    const logoutStatus = await signOut();

    if (logoutStatus) {
      showToast({ message: "Logged out successfully!", type: "success" });
      dispatch(logout());
      navigate("/sign-in");
    } else {
      showToast({ message: "Failed to log out!", type: "error" });
    }
  };

  return (
    <header className="bg-stone-800 py-4 shadow-xl z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <span className="text-2xl md:text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="text-stone-300 flex gap-1 items-center">
            <img src={logo} alt="PageTurner Logo" width={36} />
            <span>PageTurner</span>
          </Link>
        </span>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-stone-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <RiMenu2Fill className="mr-2" size={24} />
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 absolute md:static bg-stone-800 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 px-10 *:border-b *:border-stone-700`}
        >
          {isLoggedIn ? (
            <>
              <Link
                to="/my-books"
                className="block md:inline text-stone-300 hover:text-stone-400 py-2 md:py-0"
              >
                My Books
              </Link>
              <Link
                to="/my-stores"
                className="block md:inline text-stone-300 hover:text-stone-400 py-2 md:py-0"
              >
                My Stores
              </Link>
              <button
                className="bg-stone-300 px-4 py-2 rounded-lg cursor-pointer hover:opacity-90 block md:inline mt-2 md:mt-0"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/sign-up"
              className="bg-stone-300 px-4 py-2 rounded-lg text-stone-700 font-bold hover:opacity-90 active:scale-95 transition-all block md:inline"
            >
              Sign Up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
