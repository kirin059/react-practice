import { Component } from "react";

class Input extends Component {
    render() {
        const style = {
            display: "flex",
            justifyContents: "center",
            fontSize: "15px",
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
