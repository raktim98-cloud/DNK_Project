import { NavLink } from "react-router";



function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-6 bg-[rgba(21,99,144,0.7)]">
        
        <div className="logo">
        <div className="max-w-[140px] w-[140px]">
          <img className="w-full h-full" src="./logo1-free-img.png" alt="image" />
        </div>
        </div>
        <ul className="flex space-x-6 pr-[450px]">
        <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 px-4 py-2" : "text-white"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
        <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 px-4 py-2" : "text-white"
              }
              to="/woman"
            >
              WOMAN
            </NavLink>
          </li>
        <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 px-4 py-2" : "text-white"
              }
              to="/men"
            >
              MEN
            </NavLink>
          </li>
           
            <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 px-4 py-2" : "text-white"
                  }
                  to="/accessories"
                  >
                  ACCESSORIES
                </NavLink>
          </li>
        </ul>

          <ul className="flex space-x-6 items-center">
          
          
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 px-4 py-2" : "text-white"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 px-4 py-2" : "text-white"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <span className="fa-solid fa-user text-white">
         
        </span>
        </ul>
        
      </nav>
    </>
  );
}



export default Nav;