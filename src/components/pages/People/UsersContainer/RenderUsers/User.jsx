import React from 'react';
import FollowButton from '../../../../commonComponents/FollowButton/FollowButton';
import userPhoto from '../../../../../assets/imgs/user.jpeg';
import style from './user.module.css';
import { NavLink } from 'react-router-dom';
import { setFollowThunkPeople } from '../../../../../redux/reducers/people-reducer';

const User = (props) => {
    return (
        <div className={style.user} key={props.obj.id}>
            <NavLink to={`/profile/${props.obj.id}`} >
                <img src={props.obj.photos?.large ? props.obj.photos.large : userPhoto} alt={`${props.obj.name} avatar`} />
            </NavLink>
            <div className={style.userInfo}>
                <div>
                    <NavLink to={`/profile/${props.obj.id}`} >
                        <h5>{props.obj.name}</h5>
                    </NavLink>
                    <span>
                        {props.obj.status && (props.obj.status.length < 50 ? props.obj.status : `${props.obj.status.slice(0, 50)}...`)}
                    </span>
                </div>
                <div className={style.locationAndFollow}>
                    <span>{props.obj?.location?.city}, {props.obj?.location?.country}</span>
                    <FollowButton
                        followed={props.obj.followed}
                        id={props.obj.id}
                        setFollowThunk={setFollowThunkPeople}
                        isFollowing={props.buttonIsFollowing} />
                </div>
            </div>
        </div>
    );
};

export default User;