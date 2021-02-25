import { Component } from "react";

import "./Modal.scss";

class Modal extends Component {
    render() {
        return (
            <div className="modal">
                <input value={this.props.title} type="text" />
                <button>{this.props.sub}</button>
            </div>
        );
    }
}

export default Modal;
