import { navLinks } from "../../constants/dummy-data";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import HeaderLogoMobile from "../../assets/HeaderLogoMobile.svg";
import { useState } from "react";
import Hamburger from "../../assets/Hamburger.svg";
import Link from "../Link";

const Navbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY >= 80) {
      setNavbarBgColor(true);
    } else {
      setNavbarBgColor(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`${
          navbarBgColor ? "shadow-xl " : "shadow-none bg-transparent "
        } bg-white fixed top-0 z-[20] w-full  transition-all`}>
        <div className="max-w-[1512px] mx-auto py-4 px-4 lg:px-10">
          <nav className="flex flex-wrap justify-between items-center">
            <a href="/">
              <picture>
                <source media="(min-width:768px)" srcSet={HeaderLogo} />
                <img src={HeaderLogoMobile} alt="logo" />
              </picture>
            </a>
            <ul className="lg:flex items-center gap-[45px] hidden">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-blue transition-all duration-300">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}

              <Link href="#getStarted" text="Contact" />
            </ul>

            <button
              className="lg:hidden text-2xl font-semibold tracking-widest transition-all duration-500"
              onClick={toggleNavbar}>
              {isOpen ? "X" : <img src={Hamburger} alt="mobile menu" />}
            </button>

            {/* Mobile links */}
            {isOpen && (
              <div className="flex flex-col basis-full gap-4">
                <ul className="flex flex-col gap-[1rem] items-center mt-8">
                  {navLinks.map((item) => (
                    <li key={item.label} className="font-normal text-[16px]">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                  <a
                    href="#getStarted"
                    className="bg-blue rounded-[0.375rem] flex justify-center items-center py-[0.625rem] px-[1.875rem] text-white text-[1.1875rem]">
                    Contact
                  </a>
                </ul>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
