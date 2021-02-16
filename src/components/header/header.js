import { Component } from "react";

class Header extends Component {
    render() {
        const style = {
            width: "500px",
            height: "auto",
            color: "aqua",
            backgroundColor: "black",
            fontSize: "80px",
        };
        return (
            <div className="Header">
                <h1 style={style}>{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;
