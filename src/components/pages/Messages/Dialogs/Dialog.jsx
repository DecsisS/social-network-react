import React from 'react';
import style from './dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <NavLink className={navData => navData.isActive ? style.active : ""}
        to={`/messages/${props.name.toLowerCase()}`}>
            <img src={props.ava} alt={`${props.name} avatar`}/>
            {props.name}
        </NavLink>
    );
};

export default Dialog;

