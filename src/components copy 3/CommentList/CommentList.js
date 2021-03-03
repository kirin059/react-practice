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

                    {/* props = {} >>> props라는 객체에 접근하려면 this.props.키 */}
                    {/* key = {값} >>> 값에 접근할 수 있다.
                    이 값은 부모컴포넌트에서 username={comment.username}에서 왼쪽 키이다 */}
                </li>
            </div>
        );
    }
}

export default CommentList;

// props라는 객체 만들어짐 (부모 컴포넌트에서 받아온 키:값)
// props = {
//     username : Comment.username
//     content : Comment.content
//     isLiked : Comment.isLiked
// }

// this.props.username  >>> Comment.username이 값
// this.props.content  >>> Comment.conent이 값
