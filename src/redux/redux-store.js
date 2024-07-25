import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile-reducer.js';
import messagesReducer from './reducers/messages-reducer.js';
import friendsBarReducer from './reducers/friendsBar-reducer.js';
import peopleReducer from './reducers/people-reducer.js';
import authReducer from './reducers/auth-reducer.js';
import appReducer from './reducers/app-reducer.js';

const store = configureStore({
    reducer: {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        peoplePage: peopleReducer,
        friendsBar: friendsBarReducer,
        auth: authReducer,
        app: appReducer,
    },
});

export default store;