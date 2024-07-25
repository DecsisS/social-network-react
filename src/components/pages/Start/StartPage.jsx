import React from 'react';
import style from './startPage.module.css';
import logo from '../../../assets/imgs/logo.png';

const StartPage = () => {
    return (
        <div className={style.container}>
            <img src={logo} alt='logo' />
            <div className={style.text}>
                Hello! We are really excited to see you <br /> on our social network!
            </div>
        </div>
    )
};

export default StartPage;