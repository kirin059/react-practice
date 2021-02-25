import React, { Component } from "react";
import Content from "../../components/Content/Content";

import "./Todo.scss";

class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <h1>To do list</h1>
                <Content />
            </div>
        );
    }
}

export default Todo;
