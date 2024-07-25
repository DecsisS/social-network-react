import React from 'react';
import style from './profileInfo.module.css';
import FollowButton from '../../../commonComponents/FollowButton/FollowButton.jsx';
import { setFollowThunkProfile } from '../../../../redux/reducers/profile-reducer.js';
import BackgroundProfile from './InfoBlocks/BackgroundProfile.jsx';
import UserInfoContainer from './InfoBlocks/UserInfoContainer.jsx';

const ProfileInfo = (props) => {
    return (
        <div className={style.profileInfo}>
            <BackgroundProfile photo={props.userInfo.photos.large} />
            <div className={style["user-block"]}>
                <UserInfoContainer userInfo={props.userInfo} />
                <FollowButton
                    id={props.userInfo.userId}
                    followed={props.userInfo.followed}
                    setFollowThunk={setFollowThunkProfile}
                    isFollowing={props.buttonIsFollowing} />
            </div>
        </div>
    )
};

export default ProfileInfo;