import React from 'react';
import './NavBar.css';
import {NavLink} from "react-router-dom";

const NavBar = () => (
    <>
        <div className="nav-block">
                <ul className="nav-links">
                    <li><NavLink exact to="/" activeStyle={{textDecoration: 'underline'}}>Home</NavLink></li>
                    <li><NavLink exact to="/posts" activeStyle={{textDecoration: 'underline'}}>Add</NavLink></li>
                    <li><NavLink exact to="/about" activeStyle={{textDecoration: 'underline'}}>About</NavLink></li>
                    <li><NavLink exact to="/contacts" activeStyle={{textDecoration: 'underline'}}>Contact</NavLink></li>
                </ul>
        </div>
    </>
);

export default NavBar;