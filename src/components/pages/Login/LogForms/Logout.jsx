import React from 'react';
import style from './logout.module.css';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../../../redux/reducers/auth-reducer';
import defaultUser from '../../../../assets/imgs/user.jpeg';
import ButtonStyleWrapper from '../../../commonComponents/ButtonStyleWrapper/ButtonStyleWrapper';

const Logout = (props) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logOutThunk());
    }

    return (
        <div className={style.container}>
            <div className={style.userCard}>
                <img src={defaultUser} alt='user' />
                <span>{props.userLogin}</span>
            </div>
            <ButtonStyleWrapper>
                <button onClick={logoutHandler}>Logout</button>
            </ButtonStyleWrapper>
        </div>
    )
};

export default Logout;