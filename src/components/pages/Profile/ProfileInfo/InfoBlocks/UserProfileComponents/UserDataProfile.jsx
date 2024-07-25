import React from 'react';
import style from './userDataProfile.module.css';

const UserDataProfile = (props) => {
    return (
        <div className={style["user-data"]}>
            <div>
                <p>Looking for a job: {props.lookingForAJob ? 'Yes' : 'No'}</p>
                <p>Comment: {props.lookingForAJobDescription ? props.lookingForAJobDescription : 'None'}</p>
            </div>
            <span>
                <p>Contacts:</p>
                {props.contacts && (props.contacts.length !== 0)
                    ? props.contacts.reduce((acc, contact, index) => {
                        if (contact) {
                            const newContact = contact.startsWith('https://')
                                ? contact
                                : `https://${contact}`;
                            acc.push(<p key={index}> <a href={newContact}>{newContact}</a> </p>)
                        }
                        return acc.length !== 0 ? acc : <i>None</i>;
                    }, []) 
                    : <i>None</i>
                }
            </span>
        </div>
    )
};

export default UserDataProfile;