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
        // 구조분해할당 해주기
        const { changeColor, subTitleState, changeH3State } = this.props;
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

                {/* Comment 페이지에서 props받아오기 */}
                <h2 style={{ color: changeColor }}> Child Title </h2>
                <h3 className={subTitleState ? "showSubTitle" : "hiddenSubTitle"}>보일까요? 안보일까요?</h3>
                <button onClick={changeH3State}> H3 버튼 </button>
            </div>
        );
    }
}

export default Content;
