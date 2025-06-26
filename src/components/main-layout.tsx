"use client";

import { ReactNode, useState } from "react";
import Navbar from "./navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <div className="grid md:grid-cols-12 gap-5 p-3 md:p-5">
      <div
        className={`bg-purple-500 h-80 md:col-span-1 border fixed md:static duration-300 ${
          openMenu ? "  left-0 top-[60px] z-10" : "-left-20 top-[60px] md:block"
        }`}
      >
        sidebar
      </div>
      <div className="col-span-9">
        <Navbar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
        {children}
      </div>
      <div
        className={`bg-black/20 backdrop-blur-sm h-80 col-span-2 border fixed md:static ${
          openDropdown
            ? "right-0 top-[60px] z-10 w-full h-full"
            : "-right-20 top-[60px] md:block"
        }`}
      >
        <div className={`bg-white fixed md:static p-5 ${openDropdown ? "top-[7px] right-2": "hidden md:block"}`}>
          right Sidebar
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
