import React, { useEffect } from 'react';
import PostBlock from './Post-block/PostBlock.jsx';
import styleObj from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileThunk } from '../../../redux/reducers/profile-reducer.js';
import Preloader from '../../commonComponents/Preloader/Preloader.jsx';
import { useParams } from 'react-router-dom';
import { createSelector } from '@reduxjs/toolkit';

const ProfileContainer = (props) => {
    const selector = () => {
        const selectAuthId = state => state.auth;
        const selectUserData = state => state.profilePage;
        const selectData = createSelector(
            [selectAuthId, selectUserData],
            (auth, userData) => {
                return {
                    authId: auth.data.id,
                    isAuth: auth.isAuth,
                    userData,
                }
            }
        );
        return selectData
    };
    const state = useSelector(selector());

    const { userId } = useParams();
    const newUserId = userId ? userId : state.authId;

    const dispatch = useDispatch();

    useEffect(() => {
        newUserId && dispatch(getUserProfileThunk({newUserId}));
    }, [newUserId]);

    return (
        <Preloader isFetching={state.userData.isFetching}>
            <div className={styleObj["page-content"]}>
                <ProfileInfo
                    userInfo={state.userData.userInfo}
                    buttonIsFollowing={state.userData.isRequestFollow}
                />
                <PostBlock
                    posts={state.userData.userInfo.posts}
                    userPhoto={state.userData.userInfo.photos.small}
                    userName={state.userData.userInfo.fullName}
                />
            </div>
        </Preloader>
    );
};

export default ProfileContainer;