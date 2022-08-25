import React from "react";
import { FaBars, FaStripe } from "react-icons/fa";
import {useGlobalContext} from "../../context";
import "./Navbar.css"

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
    <nav className="bg-lightPurple nav" onMouseOver={handleSubmenu}>
      <div className="bg-lightPurple nav-center">
        <div className="nav-header">
          <div>{<FaStripe className="text-lightOrange" size={50} />}</div>

          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars className="text-lightOrange" />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn text-orange"
              onMouseOver={displaySubmenu}
            >
              Home
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              About
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Service
            </button>
          </li>

          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Contact
            </button>
          </li>
        </ul>

        <button className="btn signin-btn  bg-lightOrange">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
