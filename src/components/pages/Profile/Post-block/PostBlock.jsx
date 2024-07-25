import React from 'react';
import Post from './Post/Post.jsx';
import styleObj from './postBlock.module.css';
import FormForSend from '../../../commonComponents/FormForSend/FormForSend.jsx';

const PostBlock = (props) => {
    return (
        <div className={styleObj["posts-block"]}>
            <h3>My posts</h3>
            <FormForSend
                buttonName="Add post"
                placeholder="Write post!"
            />
            <div className={styleObj["old-posts"]}>
                {props.posts && props.posts.map((obj) => {
                    return (
                        <Post key={obj.id}
                            message={obj.message}
                            userPhoto={props.userPhoto}
                            userName={props.userName}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default PostBlock;