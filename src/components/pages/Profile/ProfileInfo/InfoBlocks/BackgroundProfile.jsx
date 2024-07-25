import React from 'react';
import style from './backgroundProfile.module.css';
import defaultBackground from '../../../../../assets/imgs/default-background.jpg';

const BackgroundProfile = (props) => {
    return (
        <div className={style["background-image-wrapper"]}>
                <img src={props.photo
                    ? props.photo
                    : defaultBackground} alt="background" />
            </div>
    )
};

export default BackgroundProfile;