"use client";

import logo from "@/assets/images/logo.png";
import { DATA_MENU } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  return (
    <nav className="navbar flex items-center justify-between py-4 border-b border-line-color">
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={45.6} />
      </Link>

      {/* Hamburger Menu Button (Mobile & Tablet) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Navbar Menu (Desktop & Mobile/Tablet when open) */}
      <div
        className={`navbar-menu absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out
        ${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0`}
      >
        {DATA_MENU.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
            className={`block px-4 py-2 text-center md:text-left text-sm
              ${
                menu.path === pathname
                  ? "text-primary-color font-semibold"
                  : "text-black hover:text-gray-700"
              }`}
          >
            {menu.title}
          </Link>
        ))}

        <div className="flex justify-center md:justify-start">
          <a href="https://wa.me/085157111522" target="_blank">
            <button className="bg-primary-color cursor-pointer text-sm text-black px-6 py-2 rounded-xl hover:bg-primary-color-hover transition-colors duration-200">
              Belanja Sekarang
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
