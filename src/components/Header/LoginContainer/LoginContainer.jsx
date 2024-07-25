import React from 'react';
import style from './loginContainer.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginContainer = () => {
    const auth = useSelector(state => state.auth);

    return (
        <div className={style.container}>
            {auth.isAuth
                ? <NavLink to='/login'>
                    <div className={style.userIcon}>{auth.data.login}</div>
                </NavLink>
                : <NavLink to='/login'>
                    Login
                </NavLink>
            }
        </div>
    )
};

export default LoginContainer;