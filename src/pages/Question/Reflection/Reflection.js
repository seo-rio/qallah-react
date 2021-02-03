import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReflMain from './ReflMain';
import ReflList from './ReflList';
import ReflHistory from './ReflHistory';
import ReflDone from './ReflDone';

const Reflection = ({
    match
}) => {
    return(
        <Switch>            
            <Route path={`${match.path}/start`} component={ReflList}></Route>
            <Route path={`${match.path}/done`} component={ReflDone}></Route>
            <Route path={`${match.path}/history`} component={ReflHistory}></Route>
            <Route path={`${match.path}`} component={ReflMain}></Route>
        </Switch>
    );
}

export default Reflection;