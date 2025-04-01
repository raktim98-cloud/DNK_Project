import { HiMenu} from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import { Link, NavLink } from "react-router";


const activeStyle = ({ isActive }) => {
  return isActive
    ? "text-blue-500 text-sm leading-normal trackting-[0.2px]"
    : "text-white text-sm leading-normal trackting-[0.2px]";
};

const menus = [
  {
    id: 1,
    text: "EVERYTHINK",
    link: "/",
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
  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="bg-[rgba(2,21,190,0.27)]">
      <div className="container mx-auto">
        {/* nav div */}
        <div className="grid grid-cols-[200px_auto] lg:grid-cols-[200px_1fr_auto] lg:items-center lg:justify-start px-4 py-1">
          {/* logo */}
          <div className="w-[140px] h-[60px] lg:h-[40px]">
            <img className="size-full" src="logo1-free-img.png" alt="logo" />
          </div>
        {/* lg nav part */}
          <div className="hidden lg:flex items-center justify-center  py-4 pr-5">
            <ul className="flex items-center justify-center gap-2 -ml-25">
              {menus?.map((item) => <MenuItem className={activeStyle} key={item.id} text={item.text} link={item.link}/>)}
            </ul>
            <ul className="flex items-center justify-center gap-2 ml-15">
            {contactMenu?.map((item) => <MenuItem className={activeStyle} key={item.id} text={item.text} link={item.link}/>)}
            </ul>
          </div>

          {/* contact part */}
          <div className="text-white flex items-center justify-end gap-5 lg:pb-1">
          <div className="flex items-center justify-center gap-2">
            <a className="text-lg" href="#">
              <span className="text-sm font-bold">$0.00</span>
            </a>
            <a className="text-xl relative" href="#">
              <HiShoppingBag />
              <span className="absolute rounded-[50%] w-[18px] h-[18px] bg-white text-black text-center text-[13px] right-0 top-0 translate-x-2.5 -translate-y-2.5 ">0</span>
            </a>
          </div>
          <button className="hidden md:block">
          <FaUserLarge />
          </button>
          <button className="lg:hidden w-40px h-40px p-1.5 bg-black text-3xl text-center" onClick={() => setShowMenu(!showMenu)}>
          
          <HiMenu />
          
          </button>
          
        </div>
        </div>
        
      </div>
      {/* popup menu */}
      {showMenu && (
      
        <div className="absolute  lg:hidden w-full text-center bg-[rgba(22,95,134,0.97)] py-10 z-20 top-0 left-0">
          <button className="flex bg-[rgba(22,42,134,0.89)]  transition-all hover:bg-red-700 hover:text-white text-white text-2xl px-2.5 py-3" onClick={closeMenu}><IoIosCloseCircleOutline /></button>
          <ul className="!text-black">
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
    <li className="text-white lg:text-white border-b lg:border-none border-b-[#e2e2e2] ">
      <NavLink className="text-[14px] px-[14px] transition-all leading-[70px] uppercase text-nowrap font-bold" to={link} >
        {text}
      </NavLink>
    </li>
  );
}
