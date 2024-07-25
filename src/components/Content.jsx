import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileContainer from './pages/Profile/ProfileContainer.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import StartPage from './pages/Start/StartPage.jsx';
import WithAuthNavigate from '../HOCs/WithAuthNavigate.jsx';
import WithSuspense from '../HOCs/WithSuspense.jsx';

const Messages = lazy(() => import('./pages/Messages/Messages.jsx'));
const News = lazy(() => import('./pages/News/News.jsx'));
const People = lazy(() => import('./pages/People/People.jsx'));
const Settings = lazy(() => import('./pages/Settings/Settings.jsx'));
const Music = lazy(() => import('./pages/Music/Music.jsx'));

const Content = (props) => {
    const ProfileWithAuth = WithAuthNavigate(ProfileContainer);
    const MessagesWithAuth = WithAuthNavigate(Messages);
    return (
        <Routes>
            <Route path="/" element={
                <StartPage />} />
            <Route path="/login" element={
                <LoginPage />} />
            <Route path="/profile/:userId?" element={
                <WithSuspense component={<ProfileWithAuth />} />} />
            <Route path="/messages/*" element={
                <WithSuspense component={<MessagesWithAuth />} />} />
            <Route path="/people/*" element={
                <WithSuspense component={<People />} />} />
            <Route path="/news/*" element={
                <WithSuspense component={<News />} />} />
            <Route path="/music/*" element={
                <WithSuspense component={<Music />} />} />
            <Route path="/settings/*" element={
                <WithSuspense component={<Settings />} />} />
        </Routes>
    );
};

export default Content;