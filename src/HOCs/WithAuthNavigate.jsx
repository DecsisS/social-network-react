import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WithAuthNavigate = (Component) => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    class NavigateComponent extends React.Component {
        render() {
            return !isAuth
                ? <Navigate to='/login' />
                : <Component {...this.props} />
        }
    }
    return NavigateComponent;
};

export default WithAuthNavigate;