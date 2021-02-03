import React from "react"
import { Route, Switch } from 'react-router-dom';
import ByOtherDone from './ByOtherDone';
import ByOtherHistory from './ByOtherHistory';
import ByOtherList from './ByOtherList';
import ByOtherMain from './ByOtherMain';

const QuestionByOthers = ({
    match
}) => {
    return(
        <Switch>
            <Route path={`${match.path}/start`} component={ByOtherList}></Route>
            <Route path={`${match.path}/history`} component={ByOtherHistory}></Route>
            <Route path={`${match.path}/done`} component={ByOtherDone}></Route>
            <Route path={`${match.path}`} component={ByOtherMain}></Route>
        </Switch>
    );
}

export default QuestionByOthers;