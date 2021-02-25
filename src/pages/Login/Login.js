import React, { Component } from "react";
import Modal from "../../components/Modal/Modal";

import "./Login.scss";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="back">
                    <h1>sign up</h1>
                    <label for="name">
                        <input id="name" type="text" placeholder="Enter your name" />
                    </label>
                    <label for="email">
                        <input id="email" type="text" placeholder="Enter your email" />
                    </label>
                    <label for="pw">
                        <input id="pw" type="text" placeholder="Enter your password" />
                    </label>
                    <label for="pw2">
                        <input id="pw2" type="text" placeholder="Confirm your password" />
                    </label>
                </div>

                <Modal />
            </div>
        );
    }
}

export default Login;
