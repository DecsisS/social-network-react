import React, { useEffect } from 'react';
import style from './usersBlock.module.css';
import User from './User';
import { useSelector } from 'react-redux';

const UsersBlock = () => {
    const peopleState = useSelector(state => state.peoplePage);
    const usersArray = peopleState.people;
    return (
        <div className={style.usersBlock}>
            {usersArray.map((obj) => {
                return (
                    <User key={obj.id} obj={obj} buttonIsFollowing={peopleState.isRequestFollow}/>
                );
            })}
        </div>
    );
};

export default UsersBlock;