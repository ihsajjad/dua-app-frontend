"use client";

import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  openDropdown: boolean;
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ openMenu, setOpenMenu, openDropdown, setOpenDropdown }: NavbarProps) => {
  return (
    <div className="flex gap-2 items-center justify-between flex-col md:flex-row">
      <div className="flex items-center justify-between w-full">
        <button
          className={`block md:hidden bg-white rounded-full p-1 duration-300 ${
            openMenu ? "-rotate-180" : ""
          }`}
          onClick={() => setOpenMenu((p) => !p)}
        >
          <Image
            src={"/icons/arrow-right.png"}
            alt="Search Icon"
            width={26}
            height={26}
          />
        </button>
        <span className="text-[#393939] text-2xl">Dua Page</span>

        <button className="md:hidden flex items-center gap-1"
        onClick={() => setOpenDropdown((p) => !p)}
        >
          <Image
            src={"/icons/user.png"}
            alt="Search Icon"
            width={40}
            height={40}
            className="bg-white"
          />
          <Image
            src={"/icons/polygon.png"}
            alt="Search Icon"
            width={12}
            height={12}
            className={`duration-300 ${
            openDropdown ? "" : "-rotate-180"
          }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-between w-full md:w-fit">
        <label
          htmlFor="search"
          className="p-1 pl-4 bg-white placeholder:text-[#868686] placeholder:text-base rounded-md w-full md:w-[370px] flex items-center justify-between"
        >
          <input
            type="text"
            id="search"
            placeholder="Search by Dua Name"
            className="outline-none"
          />
          <button className="bg-[var(--primary-bg)] py-[10px] px-[15px] rounded-md">
            <Image
              src={"/icons/search.png"}
              alt="Search Icon"
              width={18}
              height={18}
            />
          </button>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
