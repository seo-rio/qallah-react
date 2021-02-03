import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import QuestionToMe from './pages/Question/QuestionToMe/QuestionToMe';
import QuestionByOthers from './pages/Question/QuestionByOthers/QuestionByOthers';
import Experience from './pages/Question/Experience/Experience';
import Reflection from './pages/Question/Reflection/Reflection';
import Profile from './pages/Account/Profile';

const Routes = () => {
    return (
        <div class="wrapper">
            <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/questiontome' component={QuestionToMe} />
                    <Route path='/questionbyothers' component={QuestionByOthers}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/reflection' component={Reflection}/>
                    <Route path='/profile' component={Profile} />
                </Switch>
            <Footer />
        </div>
    );
};

export default Routes;
