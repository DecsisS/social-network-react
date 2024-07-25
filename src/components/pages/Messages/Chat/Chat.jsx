import React from 'react';
import style from './chat.module.css';
import Message from './Message.jsx';
import FormForSend from '../../../commonComponents/FormForSend/FormForSend.jsx';
import { useSelector } from 'react-redux';

const Chat = (props) => {
    const messagesPageData = useSelector(state => state.messagesPage);
    return (
        <div className={style.chat}>
            {messagesPageData.messages.map((obj) => {
                return (
                    <Message key={obj.id} message={obj.message} my={obj.my ? style.my : ''} />
                )
            })}
            <FormForSend
                buttonName="Send"
                placeholder="Write message..."/>
        </div>
    );
};

export default Chat; 