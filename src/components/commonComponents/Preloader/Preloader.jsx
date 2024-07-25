import React from 'react';
import style from './preloader.module.css';
import preloader from '../../../assets/imgs/tube-spinner.svg';

const Preloader = (props) => {
    return (
        <div className={style.container}>
            {
            props.isFetching
                ? <img className={style.preloader} src={preloader} alt='Downloading'/>
                : props.children
            }
        </div>
    )
};

export default Preloader;