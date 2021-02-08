import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyAccount from './MyAccount';
import MyAnswer from './MyAnswer';
import AnswerView from './AnswerView';

const Profile = ({
    match
}) => {
    return (
        <Switch>
            <Route path={`${match.path}/answer/view`} component={AnswerView}></Route>
            <Route path={`${match.path}/answer`} component={MyAnswer}></Route>
            <Route path={`${match.path}/`} component={MyAccount}></Route>
            {/* <Route path={`${match.path}`} component={}></Route> */}
        </Switch>
    );
};

export default Profile;
