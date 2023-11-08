import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopNav = ({ curPage }) => {
  const [menu, showMenu] = useState(false);
  return (
    <nav className='mt-5'>
      <div className='flex justify-between items-center py-2'>
        <div className='w-[50%] relative'>
          <img src={logo} alt='logo' className='w-[24px] md:w-[48px]' />
          <hr className='hidden lg:block w-[90%] absolute top-5 -right-5 z-10 border-gray-700 border-b-1  ' />
        </div>
        <div className='purp z-30 w-[24px] md:hidden'>
          <div
            onClick={() => showMenu(true)}
            data-drawer-target='menu-navigation'
            data-drawer-show='menu-navigation'
            aria-controls='menu-navigation'
          >
            <span className='sr-only'>Open menu</span>
            <img
              src={hamburger}
              alt='menu icon'
              className={menu ? "hidden" : ""}
            />
          </div>
          <div
            onClick={() => showMenu(false)}
            data-drawer-target='menu-navigation'
            data-drawer-hide='menu-navigation'
            aria-controls='menu-navigation'
          >
            <span className='sr-only'>Close menu</span>
            <img src={close} alt='menu icon' className={menu ? "" : "hidden"} />
          </div>
        </div>
        <div className='hidden md:block md:w-[40vw] backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 px-10'>
          <div className='flex justify-between items-center'>
            <Link to='./'>
              <p
                className={`uppercase text-lg tracking-wide py-5 ${
                  curPage == "" ? "border-white border-b-2" : ""
                }`}
              >
                <span className='me-3 font-bold'>00</span>
                Home
              </p>
            </Link>
            <Link to='./destination'>
              <p
                className={`uppercase text-lg tracking-wide py-5 ${
                  curPage == "destination" ? "border-white border-b-2" : ""
                }`}
              >
                <span className='me-3 font-bold'>01</span>
                Destination
              </p>
            </Link>
            <Link to='./crew'>
              <p
                className={`uppercase text-lg tracking-wide py-5 ${
                  curPage == "crew" ? "border-white border-b-2" : ""
                }`}
              >
                <span className='me-3 font-bold'>02</span>
                Crew
              </p>
            </Link>
            <Link to='./technology'>
              <p
                className={`uppercase text-lg tracking-far py-5 ${
                  curPage == "technology" ? "border-white border-b-2" : ""
                }`}
              >
                <span className='me-3 font-bold'>03</span>
                Technology
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div
        id='menu-navigation'
        aria-labelledby='menu-navigation-label'
        className={`fixed top-0 -right-64 bottom-0 backdrop-filter backdrop-blur-lg z-20 bg-white bg-opacity-10 h-screen w-64 md:hidden overflow-y-auto ${
          menu
            ? "transition-transform -translate-x-full"
            : "transition-transform translate-x-full"
        }`}
      >
        <div className='flex flex-col h-[25vh] mt-48 justify-between ms-10 md:hidden'>
          <Link to='./'>
            <h5 className='uppercase barlowcond text-2xl tracking-widest'>
              <span className='me-3 font-bold'>00</span>
              Home
            </h5>
          </Link>
          <Link to='./destination'>
            <h5 className='uppercase barlowcond text-2xl tracking-widest'>
              <span className='me-3 font-bold'>01</span>Destination
            </h5>
          </Link>
          <Link to='./crew'>
            <h5 className='uppercase barlowcond text-2xl tracking-widest'>
              <span className='me-3 font-bold'>02</span>Crew
            </h5>
          </Link>
          <Link to='./technology'>
            <h5 className='uppercase barlowcond text-2xl tracking-widest'>
              <span className='me-3 font-bold'>03</span>Technology
            </h5>
          </Link>
        </div>
      </div>
    </nav>
  );
};

TopNav.propTypes = {
  curPage: PropTypes.string.isRequired,
};

export default TopNav;
