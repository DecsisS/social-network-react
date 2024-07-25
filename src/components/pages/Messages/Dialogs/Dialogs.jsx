import React from 'react';
import Dialog from './Dialog.jsx';
import style from './dialogs.module.css';
import { useSelector } from 'react-redux';

const Dialogs = (props) => {
    const data = useSelector(state => state.messagesPage.dialogs);
    return (
        <div className={style.dialogs}>
            {data.map((obj) => {
                return (
                    <Dialog key={obj.id} name={obj.name} ava={obj.ava} />
                )
            })}
        </div>
    );
};

export default Dialogs;
