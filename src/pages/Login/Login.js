import React, { Component } from "react";
import Modal from "./components/Modal/Modal";

import "./Login.scss";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            textColor: true,
            showModal: false,
        };
    }

    handleTextColor = () => {
        //console.log("confirm");
        this.setState({
            textColor: !this.state.textColor,
        });
    };

    handleLogin = () => {
        //console.log("confirm");
        this.setState({
            showModal: !this.state.showModal,
        });
    };

    render() {
        return (
            <div className="login">
                <h1 className={this.state.textColor ? "active" : "inactive"}>Welcome to visit our site</h1>
                <button className="headerBtn" onClick={this.handleTextColor}>
                    Change Title 🐣{" "}
                </button>
                <button className="loginBtn" onClick={this.handleLogin}>
                    Log in
                </button>

                {/* <Modal className={this.state.showModal ? "openModal" : "closeModal"} /> */}
                {this.state.showModal ? <Modal /> : ""}
            </div>
        );
    }
}

export default Login;
