import React from 'react';
import style from './nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar.jsx';

const Nav = (props) => {
    return (
        <nav>
            <NavLink className={navData => navData.isActive ? style.active : ""} to="/profile">
                Profile
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.active : ""} to="/messages">
                Messages
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.active : ""} to="/people">
                People
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.active : ""} to="/news">
                News
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.active : ""} to="/music">
                Music
            </NavLink>
            <NavLink className={navData => navData.isActive ? style.active + ' ' + style.settings : style.settings} to="/settings">
                Settings
            </NavLink>
            <FriendsBar />
        </nav>
    );
};

export default Nav;