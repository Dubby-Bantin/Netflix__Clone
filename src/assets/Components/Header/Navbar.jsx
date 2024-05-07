import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "/logo.png";
import searchIcon from "/search_icon.svg";
import bellIcon from "/bell_icon.svg";
import caretIcon from "/caret_icon.svg";
import ProfileIcon from "/profile_img.png";
import { logOut } from "../../../FireBase";

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const navList = [
    "Home",
    "TvShows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Language",
    ];

    useEffect(() => {
    window.addEventListener("scroll", () =>
        window.scrollY >= 100 ? handleShow(true) : handleShow(false)
    );

    return () => {
        window.removeEventListener("scroll", () => {});
    };
    }, []);

    return (
    <header className={`nav__bar flex align-ctr ${show && "nav__black"}`}>
        <div className="flex align-ctr logoList">
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="flex align-ctr nav__list">
            {navList.map((listItem, i) => (
            <small key={i}>{listItem}</small>
            ))}
        </div>
        </div>

        <div className="flex align-ctr profile__region">
        <img src={searchIcon} alt="" />
        <small>Kids</small>
        <img src={bellIcon} alt="" />
        <img className="profile__icon" src={ProfileIcon} alt="" />
        <span className="caret">
            <img src={caretIcon} alt="" />
        </span>
        <div className="drop__down">
            <p onClick={() => logOut()}>Sign out of Netflix</p>
        </div>
        </div>
    </header>
    );
};

export default Navbar;
