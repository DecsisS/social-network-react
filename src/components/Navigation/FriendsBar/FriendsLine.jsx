import React from 'react';
import style from './friendsLine.module.css';
import { useSelector } from 'react-redux';

const FriendsLine = (props) => {
    const data = useSelector(state => state.friendsBar);
    const partOfArray = data.slice(0, 3);
    return (
        <div className={style.friendsContainer}>
            {partOfArray.map((obj) => {
                return (
                    <span className={style.item} key={obj.id}>
                        <img src={obj.ava} alt={`${obj.name} avatar`}/>
                        {obj.name}
                    </span>
                )
            })}
        </div>
    )
};

export default FriendsLine;