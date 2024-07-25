import React from 'react';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from '../redux/redux-store.js';

const AppContainer = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

export default AppContainer;