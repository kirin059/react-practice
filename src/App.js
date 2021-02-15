import React, { Component } from "react";

import Subject from "./components/Subject/Subject";
import Content from "./components/Content/Content";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: { title: "WEB", sub: "word wide web" },
            content: [
                { id: 1, title: "html", desc: "html is hypertext..." },
                { id: 2, title: "css", desc: "css is for design..." },
                { id: 3, title: "js", desc: "js is for interactive..." },
            ],
        };
    }

    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <Content data={this.state.content}></Content>
            </div>
        );
    }
}

export default App;
