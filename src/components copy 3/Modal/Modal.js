import { Component } from "react";

import "./Modal.scss";

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-container" id="modal">
                    <button id="closeBtn">
                        <i className="fa fa-times"></i>X
                    </button>
                    <div class="modal-content">
                        <p>Register with us</p>
                        <form className="modal-form">
                            <div>
                                <label for="name">Name</label>
                                <input id="name" className="form-input" type="text" placeholder="Enter Name" />
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input id="email" className="form-input" type="email" placeholder="Enter Email" />
                            </div>
                            <div>
                                <label for="password">Password</label>
                                <input id="password" className="form-input" type="password" placeholder="Enter Password" />
                            </div>
                            <div>
                                <label for="password2">Confirm Password</label>
                                <input id="password2" className="form-input" type="password" placeholder="Confirm Password" />
                            </div>
                            <input className="submit-btn" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
