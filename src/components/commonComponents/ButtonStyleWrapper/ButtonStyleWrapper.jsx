import React from 'react';
import style from './buttonStyleWrapper.module.css';

const ButtonStyleWrapper = (props) => {
    return (
        <div className={style.buttonContainer}>
            {props.children}
        </div>
    )
}

export default ButtonStyleWrapper;