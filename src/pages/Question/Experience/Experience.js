import React from "react"
import { Route, Switch } from 'react-router-dom';
import ExpMain from './ExpMain';
import ExpWrite from './ExpWrite';
import ExpDone from './ExpDone';

const Experience = ({
    match
}) => {
    return(
        <Switch>
            <Route path={`${match.path}/write`} component={ExpWrite}></Route>
            <Route path={`${match.path}/done`} component={ExpDone}></Route>
            <Route path={`${match.path}`} component={ExpMain}></Route>
        </Switch>
    );
}

export default Experience;