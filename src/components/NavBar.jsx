import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LogoIcon from "../assets/shared/LogoIcon";
import HamburgerIcon from "../assets/shared/HamburgerIcon";
import CloseIcon from "../assets/shared/CloseIcon";
import MobileNav from "./navigation/MobileNav";
import PropTypes from "prop-types";

function Navbar({ windowWidth }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  function handleMobileNavToggle() {
    setMobileNavOpen(!mobileNavOpen);
  }

  function handleOverlayClick() {
    setMobileNavOpen(false);
  }

  const paths = {
    home: {
      path: "/space-tourism-website/",
      name: "Home",
    },
    destination: {
      path: "/space-tourism-website/destination",
      name: "Destination",
    },
    crew: {
      path: "/space-tourism-website/crew",
      name: "Crew",
    },
    technology: {
      path: "/space-tourism-website/technology",
      name: "Technology",
    },
  };

  return (
    <>
      <header className="flex justify-between min-w-screen items-center px-6 pt-6 z-40 md:pt-0 md:px-0 lg:pt-10">
        <Link to="/space-tourism-website/" className="md:ml-10 lg:ml-14">
          <LogoIcon height={windowWidth >= 768 ? 48 : 40} width={windowWidth >= 768 ? 48 : 40}/>
        </Link>
        <button className="text-primary focus:outline-none md:hidden z-50" onClick={handleMobileNavToggle}>
          {mobileNavOpen 
            ? <CloseIcon className="mr-0.5 md:hidden" />
            : <HamburgerIcon className="md:hidden" />
          }
        </button>
        {mobileNavOpen && (
          <MobileNav handleOverlayClick={handleOverlayClick} handleMobileNavToggle={handleMobileNavToggle} />
        )}
        <nav className="hidden md:flex md:justify-center md:bg-opaque md:w-112 lg:w-207 backdrop-blur-2xl">
          <ul className="uppercase text-primary flex items-center gap-9 lg:gap-13 font-secondary md:min-h-24">
          {windowWidth >= 1440 && <div className="h-tiny w-118 bg-white opacity-25 absolute right-nav-accent"></div>}
            {Object.values(paths).map((path, index) => (
              <li key={path.name}>
                <Link 
                  to={path.path} 
                  className={`py-9 tracking-nav text-sub lg:text-base font-primary-condensed ${path.path === location.pathname ? "border-b-3" : "hover:border-b-3 hover:border-hover"}`}
                >
                  {windowWidth >= 1440 && <span className="p-3 font-bold">{"0" + index}</span>}
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

Navbar.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Navbar;