import React from 'react';
import style from './people.module.css';
import UsersContainer from './UsersContainer/UsersContainer';

const People = () => {
    return (
        <div className={style.pageContainer}>
            <h3>All users</h3>
            <UsersContainer />
        </div>
    );
};

export default People;