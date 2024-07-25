import React from 'react';
import style from './followButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FollowButton = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();

    const clickHandler = () => {
        if (!isAuth) {
            return navigate('/login');
        }
        dispatch(props.setFollowThunk({
            id: props.id,
            followed: props.followed,
        }))
    };

    return (
        <button disabled={props.isFollowing.some((id) => id === props.id)} id={props.id} onClick={clickHandler} className={
            props.followed ? style.button : `${style.button} ${style.active}`}
            type='button'>
                {props.followed ? 'Followed' : 'Follow'}
        </button>
    )
};

export default FollowButton;