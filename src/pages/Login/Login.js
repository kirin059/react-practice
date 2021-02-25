import React, { Component } from "react";
import Modal from "../../components/Modal/Modal";

import "./Login.scss";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <h1>Welcome to visit our site</h1>

                <button>Log in</button>

                <Modal />
            </div>
        );
    }
}

export default Login;
