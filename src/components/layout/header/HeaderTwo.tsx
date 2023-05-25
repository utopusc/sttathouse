import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "public/images/logo.png";
import searchImage from "public/images/search.png";

const HeaderTwo = ({ handleSearch }: any) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };


  return (
    <nav className="navbar navbar-area navbar-expand-lg">
      <div className="container nav-container navbar-bg">

        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Image" priority />
          </Link>
        </div>
        <div className="nav-right-part nav-right-part-mobile">
          <a className="search-bar-btn pointer" onClick={handleSearch}>
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div
          className={
            (toggleMenu ? " sopen" : " ") + " collapse navbar-collapse"
          }
          id="itech_main_menu"
        >
          <ul className="navbar-nav menu-open text-lg-end">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right-part nav-right-part-desktop align-self-center">
          <a className="btn btn-base" href="contact.html">
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderTwo;
