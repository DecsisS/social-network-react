import React, { useEffect } from 'react';
import './styleApp.css';
import Header from '../components/Header/Header.jsx';
import Nav from '../components/Navigation/Nav.jsx';
import Content from '../components/Content.jsx';
import { BrowserRouter } from 'react-router-dom';
import Preloader from '../components/commonComponents/Preloader/Preloader.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { authThunk } from '../redux/reducers/auth-reducer.js';
import { initializeApp } from '../redux/reducers/app-reducer.js';

const App = (props) => {
    const initialized = useSelector((state) => state.app.initializedSuccess);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authThunk())
            .then(() => {
                dispatch(initializeApp());
            })
    }, [])

    return (
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <Preloader isFetching={!initialized}>
                    <div className="app-container">
                        <Header />
                        <Nav />
                        <div className="content-container">
                            <Content />
                        </div>
                    </div>
            </Preloader>
        </BrowserRouter>
    )
};

export default App;