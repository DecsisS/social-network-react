import React from 'react';
import style from './messages.module.css';
import Dialogs from './Dialogs/Dialogs.jsx';
import Chat from './Chat/Chat.jsx';

const Messages = (props) => {
    return (
        <div className={style.pageContainer}>
            <Dialogs />
            <Chat />
        </div>
    );
};

export default Messages;