import React, { useEffect, useState } from 'react';
import { FaBars, FaPhone, FaSearch, FaTimes } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {

  // responsive menu icon
  const [clicktwo, setClicktwo] = useState(false);
  const handleClicktwo = () => setClicktwo(!clicktwo);

  // navbar color change
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  // change theme
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={`fixed-top ${navbarColor ? "bg-bg-color transition ease-in-out duration-300" : "bg-transparent"} w-full h-[100px] grid items-center`}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-0">
          <h1>
            <a className="text-white font-bold text-[34px] tracking-wide" href="/">
              Pet<span className="font-normal">spatial.</span>
            </a>
          </h1>

          <div className={`${clicktwo ? "fixed top-0 left-0 right-0 z-50" : "collapse"} bg-transparent lg:flex lg:items-center lg:static`}>
            <ul className="flex flex-col lg:flex-row lg:items-center">
              <li className="nav-item active">
                <a className="text-white text-[18px] font-medium px-[10px] py-[6px] hover:text-primary transition" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="text-white text-[18px] font-medium px-[10px] py-[6px] hover:text-primary transition" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="text-white text-[18px] font-medium px-[10px] py-[6px] hover:text-primary transition" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="text-white text-[18px] font-medium px-[10px] py-[6px] hover:text-primary transition" href="/contact">Contact</a>
              </li>
            </ul>

            <ul className="flex items-center mt-4 lg:mt-0">
              <li className="mr-2">
                <a href="#search" className="bg-[rgba(255,255,255,0.12)] text-white text-[20px] w-[45px] h-[45px] rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaSearch aria-hidden="true" />
                </a>
              </li>
              <li className="mx-4 hidden lg:block">
                <a href="tel:+(12)234-11-24" className="bg-bg-light text-primary text-[15px] font-medium py-[12px] px-[26px] rounded-[4px] flex items-center">
                  <FaPhone className="mr-[8px]" aria-hidden="true" /> (32)234-14-94
                </a>
              </li>
            </ul>
          </div>

          <div className="absolute right-[50px] top-[36px] flex items-center">
            <div className="cursor-pointer text-xl text-white" onClick={() => changeTheme()}>
              {click ? <BsSun /> : <BsMoon />}
            </div>
          </div>

          <div className="cursor-pointer text-white text-[20px] w-[34px] h-[34px] flex items-center justify-center rounded-[4px] bg-primary lg:hidden" onClick={handleClicktwo}>
            {clicktwo ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
