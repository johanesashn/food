import React, { useState, useEffect } from 'react';
import $ from 'jquery';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [navSpan, setNavSpan] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    $("button.menu-toggle").on("click", () => {
      setShowList(!showList);
      console.log("triggered");
    });

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        setNavbar(true);
        setNavSpan(true);
        setMenu(true);
      } else {
        setNavbar(false);
        setNavSpan(false);
        setMenu(false);
      }
    });
  }, [showList]);

  return (
    <nav className={navbar ? "active_nav" : ""}>
      <h3 className="nav-title">
        F<span className={navSpan ? "active_span" : ""}>OO</span>DIES
      </h3>
      <ul className={`${showList ? "active nav-list" : "nav-list"}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#foods">Foods</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button
        className={`menu-toggle ${menu ? "active_menu" : ""}`}
      >
        <span className="nav-line"></span>
        <span className="nav-line"></span>
        <span className="nav-line"></span>
      </button>
    </nav>
  );
}
