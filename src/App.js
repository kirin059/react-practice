import React, { Component } from "react";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Content from "./components/Content/Content";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "read",
            header: { title: "To-Do-List" },
            input: { title: "todolist", sub: "click" },
            welcome: { title: "welcome", sub: "nice to meet you" },
            content: [
                { id: 1, title: "list1", desc: "to do list(1)" },
                { id: 2, title: "list2", desc: "to do list(2)" },
                { id: 3, title: "list3", desc: "to do list(3)" },
            ],
        };
    }

    render() {
        let _title,
            _sub = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _sub = this.state.welcome.sub;
        } else if (this.state.mode === "read") {
            _title = this.state.input.title;
            _sub = this.state.input.sub;
        }
        return (
            <div className="App">
                <Header
                    onClick={function (e) {
                        e.preventDefault();
                        this.setState({
                            mode: "welcome",
                        });
                    }.bind(this)}
                    title={this.state.header.title}
                ></Header>
                <Input title={_title} sub={_sub}></Input>
                <Content data={this.state.content}></Content>
            </div>
        );
    }
}

export default App;
