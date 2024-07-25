import React from 'react';
import './header.module.css';
import LoginContainer from './LoginContainer/LoginContainer';
import logo from '../../assets/imgs/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
            <LoginContainer />
        </header>
    );
};

export default Header;