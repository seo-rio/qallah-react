import React from "react"
import { Link, Route, Switch } from 'react-router-dom';
import ToMeList from './ToMeList';
import ToMeHistory from './ToMeHistory';
import ToMeDone from './ToMeDone';
import ToMeMain from './ToMeMain';

const QuestionToMe = ({
    match
}) => {
    return(
        <>
        <Switch>
            <Route path={`${match.path}/start`} component={ToMeList}></Route>
            <Route path={`${match.path}/history`} component={ToMeHistory}></Route>
            <Route path={`${match.path}/done`} component={ToMeDone}></Route>
            <Route path={`${match.path}`} component={ToMeMain}></Route>
        </Switch>
        </>
    );
}

export default QuestionToMe;