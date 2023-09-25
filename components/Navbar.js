import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
const menu_list = [
  { text: "projects", href: "/projects" },
  // { text: "experience", href: "/experience" },
  { text: "education", href: "/education" },
  { text: "skills", href: "/skills" },
  // { text: "contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo" style={{fontFamily: "consolas", color: "#3DB8A5", fontSize: "1.25rem", fontWeight: "normal"}}> {"<"}div{">"} </h1>
            <h1 className="logo" style={{fontWeight: "normal"}}> {"\u00a0\u00a0\u00a0"}vladimir venkov</h1>
            <h1 className="logo" style={{fontFamily: "consolas", color: "#3DB8A5", fontSize: "1.25rem", fontWeight: "normal"}}> {"<"}{"/"}div{">"} </h1>
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
          {menu_list.map((menu, idx) => (
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
