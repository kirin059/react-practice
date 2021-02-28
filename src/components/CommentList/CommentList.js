import React, { Component } from "react";

import "./CommentList.scss";

class CommentList extends Component {
    render() {
        return (
            <div className="commentList">
                <li>
                    <span>{this.props.username}</span>
                    <span>{this.props.content}</span>
                    <span>{this.props.isLiked ? "좋아요" : "싫어요"}</span>
                    {/* props = 부모에서 자식으로 데이터를 보내주는 것 */}
                </li>
            </div>
        );
    }
}

export default CommentList;
