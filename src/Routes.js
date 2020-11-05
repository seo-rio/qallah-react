import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes = () => {
    return (
        <div>
            <Header />
            <hr />
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
        </div>
    );
};

export default Routes;
