import profileReducer, { addPost, deletePost } from "./profile-reducer";

// 1. test data
// 2. action
// 3. expectation

const initialState = {
    userInfo: {
        posts: [
            {
                id: 1,
                message: 'Hello',
                likesCount: 0,
            }
        ],
    }
};

it('length of posts should be increment', () => {
    // 1. test data
    // 2. action
    const action = addPost('New post in my wall!');
    const newState = profileReducer(initialState, action);
    // 3. expectation
    expect(newState.userInfo.posts.length).toBe(2);
});

it('message of post should be correct', () => {
    const action = addPost('New post in my wall!');
    const newState = profileReducer(initialState, action);

    expect(newState.userInfo.posts[1].message).toBe('New post in my wall!');
});

it('after deleting length of posts should be decrement', () => {
    const action = deletePost(1);
    const newState = profileReducer(initialState, action);

    expect(newState.userInfo.posts.length).toBe(1);
    expect(newState.userInfo.posts[0].message).toBe('Hello');
});