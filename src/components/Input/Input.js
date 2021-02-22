import { Component } from "react";

class Input extends Component {
    render() {
        const style = {
            display: "inline",
            fontSize: "15px",
            textAlign: "center",
        };
        return (
            <div className="Input">
                <input style={style} value={this.props.title} type="text" />
                <button>{this.props.sub}</button>
            </div>
        );
    }
}

export default Input;
