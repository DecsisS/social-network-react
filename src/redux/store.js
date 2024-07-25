import profileReducer from './reducers/profile-reducer.js';
import messagesReducer from './reducers/messages-reducer.js';

export const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi", likesCount: 5 },
                { id: 2, message: "I'm beautiful", likesCount: 2 },
            ],
            newTextPost: '',
        },
        messagesPage: {
            dialogs: [
                { 
                    id: 1, 
                    name: 'Alex',
                    ava: 'https://ideaway.ru/wp-content/uploads/2023/09/5.%D0%9E%D1%81%D1%82%D0%B0%D0%B2%D1%8C%D1%82%D0%B5-%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D1%83-%D0%B4%D0%BE%D0%BC%D0%B0.jpg',
                },
                { 
                    id: 2, 
                    name: 'Betty',
                    ava: 'https://wallbox.ru/wallpapers/main2/201723/satenka.jpg',
                },
                { 
                    id: 3, 
                    name: 'Melany',
                    ava: 'https://demotivation.ru/wp-content/uploads/2020/05/devushka-krasivaya-lico-golubye-1536x1024.jpg'
                },
                { 
                    id: 4, 
                    name: 'John',
                    ava: 'https://kartinkof.club/uploads/posts/2022-04/1649985822_29-kartinkof-club-p-kartinki-muzhikov-prikolnie-31.jpg',
                },
                { 
                    id: 5, 
                    name: 'Olivia',
                    ava: 'https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg',
                },
                { 
                    id: 6, 
                    name: 'Brandon',
                    ava: 'https://s00.yaplakal.com/pics/pics_original/7/4/4/8344447.jpg',
                },
            ],
            messages: [
                { id: 1, message: 'Hi', my: false },
                { id: 2, message: 'Hi, hi!', my: true },
                { id: 3, message: 'How are you?', my: false },
                { id: 4, message: "I'm fine", my: true },
            ],
            newTextMessage: '',
        },
        friends: [
            {
                id: 3,
                name: 'Melany',
                ava: 'https://demotivation.ru/wp-content/uploads/2020/05/devushka-krasivaya-lico-golubye-1536x1024.jpg'
            },
            {
                id: 2,
                name: 'Betty',
                ava: 'https://wallbox.ru/wallpapers/main2/201723/satenka.jpg',
            },
            {
                id: 4,
                name: 'John',
                ava: 'https://kartinkof.club/uploads/posts/2022-04/1649985822_29-kartinkof-club-p-kartinki-muzhikov-prikolnie-31.jpg',
            },
            {
                id: 1,
                name: 'Alex',
                ava: 'https://ideaway.ru/wp-content/uploads/2023/09/5.%D0%9E%D1%81%D1%82%D0%B0%D0%B2%D1%8C%D1%82%D0%B5-%D0%B1%D0%B5%D0%B9%D1%81%D0%B1%D0%BE%D0%BB%D0%BA%D1%83-%D0%B4%D0%BE%D0%BC%D0%B0.jpg',
            },
            {
                id: 5,
                name: 'Olivia',
                ava: 'https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg',
            },
        ],
    },
    getState() {
        return this._state;
    },
    _observer() {},
    subscribe(observer) {
        this._observer = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._observer();
    },
};