import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import "./header.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
  const location = useLocation();

  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 485);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getNavLinkClass = (path) => {
    const className = location.pathname.startsWith(path) ? "active" : "";
    return className;
  };

  return (
    <div className="w-full h-full">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {isMobile ? (
          <>
            <img
              className="menuBtn"
              src={showNav ? close : menu}
              alt="Menu Toggle"
              onClick={menuToggle}
            />
            {showNav && (
              <nav>
                <ul>
                  <li>
                    <Link to="/home" onClick={menuToggle}>
                      <span>00</span> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination" onClick={menuToggle}>
                      <span>01</span> Destination
                    </Link>
                  </li>
                  <li>
                    <Link to="/crew" onClick={menuToggle}>
                      <span>02</span> Crew
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" onClick={menuToggle}>
                      <span>03</span> Technology
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul>
              <li className={getNavLinkClass("/home")}>
                <Link to="/home">
                  <span>00</span> Home
                </Link>
              </li>
              <li className={getNavLinkClass("/destination")}>
                <Link to="/destination">
                  <span>01</span> Destination
                </Link>
              </li>
              <li className={getNavLinkClass("/crew")}>
                <Link to="/crew">
                  <span>02</span> Crew
                </Link>
              </li>
              <li className={getNavLinkClass("/technology")}>
                <Link to="/technology">
                  <span>03</span> Technology
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
