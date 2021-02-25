import { Component } from "react";

import "./Content.scss";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="listContainer">
                    <div className="input">
                        <input type="text" placeholder="write your list" />
                        <button>Click</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
