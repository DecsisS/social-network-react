import React from 'react';
import style from './usersPage.module.css';
import UsersBlock from './RenderUsers/UsersBlock';
import Pages from './Pages/Pages';
import ButtonStyleWrapper from '../../../commonComponents/ButtonStyleWrapper/ButtonStyleWrapper';

const UsersPage = (props) => {
    return (
        <div className={style.usersPage}>
            <Pages pages={props.pages} pageHandler={props.pageHandler} selectedPage={props.selectedPage} arrowHandler={props.arrowHandler} />
            <UsersBlock />
            <ButtonStyleWrapper>
                <button onClick={props.buttonHandler} className={style.button}>Show more</button>
            </ButtonStyleWrapper>
        </div>
    )
};

export default UsersPage;