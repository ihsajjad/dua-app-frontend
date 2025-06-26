"use client";

import { ReactNode, useState } from "react";
import Navbar from "./navbar";
import LeftMenu from "./left-menu";
import RightSidebar from "./right-sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <div className="grid md:grid-cols-12 gap-5 p-3 md:p-5">
      <LeftMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="col-span-8">
        <Navbar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
        {children}
      </div>

      <RightSidebar openDropdown={openDropdown} />
    </div>
  );
};

export default MainLayout;
