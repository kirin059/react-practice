import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todo from "./pages/Todo/Todo";
import Modal from "./pages/Modal/Modal";

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Todo} />
                    <Route exact path="/modal" component={Modal} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
