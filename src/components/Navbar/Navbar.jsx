import React from "react";
import logo from "../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./Navbar.css";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center  bg-lightPurple">
        <div className="nav-header">
          <img src={logo} className="nav_logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Home
            </button>
          </li>
          
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              what we do
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              who we are
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
