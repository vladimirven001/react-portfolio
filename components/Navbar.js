import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
 // this a navbar taken from 
const MENU_LIST = [
  { text: "Experience", href: "/experience" },
  { text: "Education", href: "/education" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo" style={{ color: "#616262", fontSize: "1.25rem", fontWeight: "bold"}}> {"<"}div{">"} </h1>
            <h1 className="logo"> {"\u00a0\u00a0\u00a0"}Vladimir Venkov </h1>
            <h1 className="logo" style={{ color: "#616262", fontSize: "1.25rem", fontWeight: "bold"}}> {"<"}{"/"}div{">"} </h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
