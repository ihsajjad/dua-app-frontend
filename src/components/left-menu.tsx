import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const LeftMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}) => {
  const menuItems = [
    "home.png",
    "all-duas.png",
    "memorize.png",
    "bookmark.png",
    "ruqya.png",
    "dua.png",
    "book.png",
  ];
  return (
    <div
      className={`bg-white md:col-span-1 fixed md:static duration-300 flex flex-col items-center justify-between h-screen py-4  rounded-3xl ${
        openMenu ? "  left-0 top-0 z-10" : "-left-20 top-0 md:block"
      }`}
    >
      <div className="flex flex-col items-center">
        <button
          className={`block md:hidden bg-white rounded-full p-1 ${
            openMenu ? "-rotate-180" : "hidden"
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
        <Image src={`/logo.png`} alt="Dua Logo" width={73} height={73} />
      </div>

      <div className="flex flex-col gap-3 xl:gap-6">
        {menuItems.map((item) => (
          <div
            key={item}
            className="bg-[var(--primary-bg)] w-[38px] h-[38px] rounded-full flex items-center justify-center"
          >
            <Image src={`/icons/${item}`} alt={item} width={20} height={20} />
          </div>
        ))}
      </div>

      <button className="bg-[var(--primary)] h-[56px] w-[56px] flex items-center justify-center rounded-lg">
        <Image
          src={`/icons/support.png`}
          alt="Support icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default LeftMenu;
