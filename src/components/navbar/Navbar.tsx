"use client";

import { DATA_MENU } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar flex items-center justify-between py-4 border-b border-line-color">
      <div className="navbar-brand">
        <Link href="/" className="text-black">
          MyApp
        </Link>
      </div>
      <div className="navbar-menu flex space-x-10 items-center">
        {DATA_MENU.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={
              menu.path === pathname ? "text-primary-color" : "text-black"
            }
          >
            {menu.title}
          </Link>
        ))}

        <button className="bg-primary-color text-black px-4 py-2 rounded-xl hover:bg-primary-color-hover ml-4">
          Belanja Sekarang
        </button>
      </div>
    </nav>
  );
};

export default memo(Navbar);
