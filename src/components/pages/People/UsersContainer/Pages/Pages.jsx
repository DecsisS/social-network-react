import React from 'react';
import style from './pages.module.css';

const Pages = (props) => {
    return (
        <div className={style.pages}>
            <button onClick={props.arrowHandler}>{'<'}</button>
            {props.pages.map((page, index) => {
                return (
                    <button
                        className={Number(props.selectedPage) === Number(page) ? style.selectedPage : ''}
                        onClick={props.pageHandler} key={index}>
                        {page}
                    </button>
                )
            })}
            <button onClick={props.arrowHandler}>{'>'}</button>
        </div>
    )
};

export default Pages;