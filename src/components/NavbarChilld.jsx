import { useState } from "react";
import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";

export default function Navbar(props){
    const [navbar, setNavbar] = useState(false)
    const [navSpan, setNavSpan] = useState(false)
    const [menu, setMenu] = useState(false)
    const [showList, setShowList] = useState(false)

    $("button.menu-toggle").on("click", () => {
        setShowList(!showList)
    })

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
            setNavSpan(true)
            setMenu(true)
        } else {
            setNavbar(false)
            setNavSpan(false)
            setMenu(false)
        }
      });
      
    return (
        <nav className={navbar ? "active_nav nav-child" : "nav-child"}>
            <h3 className="navbarChild-title">F<span className={navSpan ? "active_span" : ""}>OO</span>DIES</h3>
            <ul>
            {props.goto.map((goto) => (
                <Link className="navbarChild-home" to={goto.link}>{goto.name}</Link>
            )
            )}
            </ul>
      </nav>
    )
}