import Image from "next/image";

const RightSidebar = ({ openDropdown }: { openDropdown: boolean }) => {
  const menuItems = [
    { icon: "language.png", title: "Language Settings" },
    { icon: "stack.png", title: "General Settings" },
    { icon: "all-duas.png", title: "Font Settings" },
    { icon: "green-dash.png", title: "Appearance Settings" },
  ];

  const active = 3;

  return (
    <div
      className={`backdrop-blur-sm h-80 col-span-3 fixed md:static rounded-3xl ${
        openDropdown
          ? "right-0 top-[60px] z-10 w-full h-full"
          : "-right-20 top-[60px] md:block"
      }`}
    >
      <div className="flex items-center justify-end mb-5">
        <button className="hidden md:flex items-center gap-1">
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
            className={`duration-300 ${openDropdown ? "" : "-rotate-180"}`}
          />
        </button>
      </div>
      <div
        className={`bg-white fixed md:static p-5 rounded-3xl ${
          openDropdown ? "top-[7px] right-2" : "hidden md:block"
        }`}
      >
        <h3 className="text-center font-bold text-[var(--primary-text)] text-xl">
          Settings
        </h3>

        <div className="flex flex-col gap-4 ">
          {menuItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-2 bg-[var(--primary-bg)] p-2 rounded-md text-[#868686] ${
                i === active
                  ? "border-l-4 border-[var(--primary)] text-[var(--primary)]"
                  : ""
              }`}
            >
              <button className="h-[38px] w-[38px] bg-[#E8F0F5] rounded-full flex items-center justify-center">
                <Image
                  src={`/icons/${item.icon}`}
                  alt={item.title}
                  width={18}
                  height={18}
                />
              </button>
              {item.title}
            </div>
          ))}

          <div
            className={`flex items-center justify-between gap-2 p-2 rounded-md text-[#868686]`}
          >
            Night Mode
            <div className="relative">
              <div className="bg-[#C1C1C1B2] h-2.5 w-7 rounded-md"></div>
              <div className="bg-[#A4A4A4] h-4 w-4 rounded-full absolute left-0 -top-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
