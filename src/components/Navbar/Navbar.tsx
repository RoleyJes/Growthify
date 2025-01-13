import { navLinks } from "../../constants/dummy-data";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import HeaderLogoMobile from "../../assets/HeaderLogoMobile.svg";
import { useState } from "react";
import Hamburger from "../../assets/Hamburger.svg";
import { Link } from "react-router-dom";
import Btn from "../Btn";

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

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`${
          navbarBgColor ? "shadow-xl " : "shadow-none bg-transparent "
        } bg-white fixed top-0 z-[20] w-full  transition-all`}>
        <div className="max-w-[1512px] mx-auto py-4 px-4 lg:px-10">
          <nav className="flex flex-wrap justify-between items-center">
            <Link to="/">
              <picture>
                <source media="(min-width:768px)" srcSet={HeaderLogo} />
                <img src={HeaderLogoMobile} alt="logo" />
              </picture>
            </Link>
            <ul className="lg:flex items-center gap-[45px] hidden">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleScroll(item.id)}
                  className="cursor-pointer hover:text-blue transition-all duration-300">
                  <p>{item.label}</p>
                </li>
              ))}

              <Btn onclick={() => handleScroll("getStarted")} text="Contact" />
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
                    <li
                      key={item.label}
                      className="cursor-pointer font-normal text-[16px]"
                      onClick={() => handleScroll(item.id)}>
                      <p>{item.label}</p>
                    </li>
                  ))}
                  <Btn
                    onclick={() => handleScroll("getStarted")}
                    text="Contact"
                  />
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
