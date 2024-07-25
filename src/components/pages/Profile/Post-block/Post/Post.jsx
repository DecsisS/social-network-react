import React, {useState} from 'react';
import style from './post.module.css';
import defaultUserPhoto from '../../../../../assets/imgs/user.jpeg';

const Post = (props) => {
    const [likeCount, setCount] = useState(0);
    function likeHandler() {
        setCount((value) => ++value);
        console.log(likeCount);
    };
    return (
        <div className={style.post}>
            <img src={props.userPhoto ? props.userPhoto : defaultUserPhoto} title={props.userName} />
            <span>
                {props.message}
                <button onClick={likeHandler}>{likeCount} Like</button>
            </span>
        </div>
    );
};

export default Post;