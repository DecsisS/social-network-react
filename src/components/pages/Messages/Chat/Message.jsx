import React from 'react';

const Message = (props) => {
    return (
        <span className={props.my}>{props.message}</span>
    );
}

export default Message;