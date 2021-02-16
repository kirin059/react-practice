import React, { Component } from "react";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Content from "./components/Content/Content";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: { title: "To-Do-List" },
            input: { title: "todolist", sub: "click" },
            content: [
                { id: 1, title: "list1", desc: "to do list(1)" },
                { id: 2, title: "list2", desc: "to do list(2)" },
                { id: 3, title: "list3", desc: "to do list(3)" },
            ],
        };
    }

    render() {
        return (
            <div className="App">
                <Header title={this.state.header.title}></Header>
                <Input title={this.state.input.title} sub={this.state.input.sub}></Input>
                <Content data={this.state.content}></Content>
            </div>
        );
    }
}

export default App;
