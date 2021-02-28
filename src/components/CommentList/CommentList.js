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
                </li>
            </div>
        );
    }
}

export default CommentList;
