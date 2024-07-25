import React from 'react';
import style from './loginPage.module.css';
import logo from '../../../assets/imgs/logo.png';
import LoginForm from './LogForms/LoginForm.jsx';
import Logout from './LogForms/Logout.jsx';
import { useSelector } from 'react-redux';

const LoginPage = () => {
    const auth = useSelector((state) => state.auth);
    return (
        <div className={style.container}>
            <div className={style.formBlock}>
                <img src={logo} alt='logo' />
                {auth.isAuth
                    ? <Logout userLogin={auth.data.login}/>
                    : <LoginForm serverError={auth.error} captcha={auth.captchaUrl}/>}
            </div>
        </div>
    )
};

export default LoginPage;