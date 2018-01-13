import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
//import SecondPage from './components/SecondPage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="login" component={LoginForm} title="Please Login" initial />
            {/* <Scene key="SecondPage" component={SecondPage} title="new Page" /> */}
        </Router>
    );
};

export default RouterComponent;
