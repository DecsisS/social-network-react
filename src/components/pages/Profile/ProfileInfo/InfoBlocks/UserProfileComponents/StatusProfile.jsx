import React, { useState } from 'react';
import style from './statusProfile.module.css';
import { updateStatusThunk } from '../../../../../../redux/reducers/profile-reducer';
import { useDispatch, useSelector } from 'react-redux';

const StatusProfile = (props) => {
    const stateStatus = useSelector((state) => state.profilePage.userInfo.status);
    const [editMode, setEdit] = useState(false);
    const [statusText, setStatusText] = useState(stateStatus);
    const dispatch = useDispatch();

    const editStatus = () => {
        setEdit((editMode) => editMode = true);
    };

    const setStatus = (event) => {
        setEdit((editMode) => editMode = false);
        dispatch(updateStatusThunk({ statusText }));
    };

    const updateStatus = (event) => {
        setStatusText((text) => text = event.target.value);
    };

    return (
        <div className={style.statusBlock}>
            {!editMode
                ? <p onDoubleClick={editStatus}>Status: {stateStatus}</p>
                : <form className={style.editBlock} onBlur={setStatus}>
                    <input autoFocus={true} onChange={updateStatus} value={statusText} />
                </form>}
        </div>
    )
};

export default StatusProfile;