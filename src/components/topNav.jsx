import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [menu, showMenu] = useState(false);
  return (
    <nav className='relative'>
      <div className='flex justify-between items-center py-2'>
        <img src={logo} alt='logo' width={24} />
        <div className='purp z-10' onClick={() => showMenu(!menu)}>
          <img src={menu ? close : hamburger} alt='menu icon' width={24} />
        </div>
      </div>
      <div
        className={`${
          menu
            ? "absolute -top-5 -right-5 bottom-0 backdrop-filter backdrop-blur-lg h-screen w-[300px]"
            : "hidden"
        }`}
      >
        <div className='flex flex-col h-[25vh] mt-48 justify-between ms-10'>
          <Link to='/'>
            <h5 className='uppercase tracking-far'>
              <span className='me-3 font-bold'>00</span>
              Home
            </h5>
          </Link>
          <Link to='/destination'>
            <h5 className='uppercase'>
              <span className='me-3 font-bold'>01</span>Destination
            </h5>
          </Link>
          <Link to='/crew'>
            <h5 className='uppercase'>
              <span className='me-3 font-bold'>02</span>Crew
            </h5>
          </Link>
          <Link to='/technology'>
            <h5 className='uppercase'>
              <span className='me-3 font-bold'>03</span>Technology
            </h5>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
