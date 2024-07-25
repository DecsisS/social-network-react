import React from 'react';
import style from './friendsBar.module.css';
import FriendsLine from './FriendsLine.jsx';

const FriendsBar = (props) => {
    return (
        <div className={style.container}>
            Friends
            <FriendsLine />
        </div>
    );
};

export default FriendsBar;