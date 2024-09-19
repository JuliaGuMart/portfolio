"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
    { title: "About me", path: "#aboutme",},
    { title: "Contact", path: "#contact",},
    { title: "Skills", path: "#skills",}
]
const NavBar = () =>{
    const [navbarOpen, setNavBarOpen] = useState(false);
    return ( 
        <nav className="flex flex-col items-center justify-between pt-10">
            <div className="flex flex-col items-center" id="navbar">
                <ul className="flex lg:pt-10 sm:pt-5 mr-5 ml-5 lg:space-x-52 sm:space-x-16">
                    {navLinks.map((link,index) => (
                        <li key={index}><NavLink href={link.path} title={link.title}/></li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
export default NavBar;