import React from 'react';
import style from './userInfoContainer.module.css';
import defaultPhoto from '../../../../../assets/imgs/user.jpeg';
import UserDataProfile from './UserProfileComponents/UserDataProfile';
import StatusProfile from './UserProfileComponents/StatusProfile.jsx';

const UserInfoContainer = (props) => {
    return (
        <div className={style.userContainer}>
            <img src={props.userInfo.photos.small
                ? props.userInfo.photos.small
                : defaultPhoto} alt="user" />
            <div className={style["user-info"]}>
                <label>{props.userInfo.fullName}</label>
                <StatusProfile />
                <UserDataProfile contacts={props.userInfo.contacts}
                    lookingForAJob={props.userInfo.lookingForAJob}
                    lookingForAJobDescription={props.userInfo.lookingForAJobDescription} />
            </div>
        </div>
    )
}

export default UserInfoContainer;