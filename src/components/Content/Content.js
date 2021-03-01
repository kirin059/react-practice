import { Component } from "react";

import "./Content.scss";

class Content extends Component {
    state = {
        name: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, // e.target = input
        });
    };

    render() {
        return (
            <div className="content">
                <form className="form">
                    <div className="input">
                        <input name="name" type="text" placeholder="write your list" value={this.state.name} onChange={this.handleChange} />
                        <button>Click</button>
                    </div>
                </form>
                <ul></ul>
                {this.state.name}
            </div>
        );
    }
}

export default Content;
