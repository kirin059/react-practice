import { Component } from "react";

class Header extends Component {
    render() {
        const style = {
            width: "500px",
            height: "auto",
            color: "aqua",
            backgroundColor: "black",
            fontSize: "70px",
        };
        return (
            <div className="Header">
                <h1 style={style}>
                    <a href="/">{this.props.title}</a>
                </h1>
            </div>
        );
    }
}

export default Header;
