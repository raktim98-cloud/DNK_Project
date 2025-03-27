import { HiMenu } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const activeStyle = ({ isActive }) => {
  return isActive
    ? "text-blue-500 text-sm leading-normal trackting-[0.2px]"
    : "text-blue-500 text-sm leading-normal trackting-[0.2px]";
};

const menus = [
  {
    id: 1,
    text: "EVERYTHING",
    link: "/everything",
  },
  {
    id: 2,
    text: "WOMAN",
    link: "/woman",
  },
  {
    id: 3,
    text: "MEN",
    link: "/men",
  },
  {
    id: 4,
    text: "ACCESSORIS",
    link: "/accessories",
  },
];
const contactMenu = [
  {
    id: 1,
    text: "ABOUT US",
    link: "/about",
  },
  {
    id: 2,
    text: "CONTACT US",
    link: "/contact",
  }
]
function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-[#156392]">
      <div className="container mx-auto">
        <div className="grid grid-cols-[200px_auto] px-4 py-1">
          <div className="w-[140px] h-[40px]">
            <img className="size-full" src="logo1-free-img.png" alt="logo" />
          </div>
          <div className="text-white flex items-center justify-end gap-5">
          <div className="flex items-center justify-center gap-2">
            <a className="text-lg" href="#">
              <span className="text-sm font-bold">$0.00</span>
            </a>
            <a className="text-xl relative" href="#">
              <HiShoppingBag />
              <span className="absolute rounded-[50%] w-[18px] h-[18px] bg-white text-black text-center text-[13px] right-0 top-0 translate-x-2.5 -translate-y-2.5 ">0</span>
            </a>
          </div>
          <button className="md:hidden w-40px h-40px p-1.5 bg-black text-3xl text-center" onClick={() => setShowMenu(!showMenu)}>
          <HiMenu />
          
          
          </button>
          <button className="hidden md:block">
          <FaUserLarge />
          </button>
        </div>
        </div>
        
      </div>
      {/* popup menu */}
      {showMenu && (
        <div className="absolute w-full left-0 top-0 translate-x-5 traslate-y-5 bg-white py-10">
          <ul className="">
            {menus?.map((item) => (
              <MenuItem key={item.id} text={item.text} link={item.link} />
            ))}
          </ul>
          <ul className="pt-5">
          {contactMenu?.map((item) => (
              <MenuItem key={item.id} text={item.text} link={item.link} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;

function MenuItem({ link, text }) {
  return (
    <li className="text-black border-b border-b-[#e2e2e2] py-4 px-6">
      <NavLink to={link} className={activeStyle}>
        {text}
      </NavLink>
    </li>
  );
}
