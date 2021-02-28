import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todo from "./pages/Todo/Todo";
import Login from "./pages/Login/Login";
import Comment from "./pages/Comment/Comment";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Todo} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/comment" component={Comment} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
