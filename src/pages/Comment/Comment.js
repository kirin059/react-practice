import React, { Component } from "react";
import CommentList from "./components/CommentList/CommentList";
import Content from "./components/Content/Content";

import "./Comment.scss";

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            commentData: [
                // 배열데이터 속에 객체 형태로 댓글 관련 정보를 담아줌
                {
                    id: 1,
                    username: "1username",
                    content: "1comment",
                    isLiked: "false", // 좋아요 또는 싫어요 2개중 하나니깐 boolean
                },
                {
                    id: 2,
                    username: "2username",
                    content: "2comment",
                    isLiked: "false",
                },
                {
                    id: 3,
                    username: "3username",
                    content: "3comment",
                    isLiked: "false",
                },
                {
                    id: 4,
                    username: "4username",
                    content: "4comment",
                    isLiked: "false",
                },
            ],
            childTitleColor: "red",
            isH3Hidden: true,
        };
    }

    handleH3State = () => {
        this.setState({
            isH3Hidden: !this.state.isH3Hidden,
        });
    };

    render() {
        return (
            <div className="comment">
                <h1>Comment your opinion</h1>
                <ul>
                    {this.state.commentData.map((comment) => {
                        return (
                            <CommentList
                                key={comment.id} // key는 map함수를 돌리는 부분에만 작성해주기
                                username={comment.username}
                                content={comment.content}
                                isLiked={comment.isLiked} // 자식컴포넌트에 값을 넘길것이기 때문에 키={값} 의 형태로 보내주는것
                            />
                        );
                    })}

                    {/* {this.state.commentData.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <span>{comment.username}</span>
                                <span>{comment.content}</span>
                                <span>{comment.isLiked ? "좋아요" : "싫어요"}</span>
                            </li>
                        );
                    })} */}
                    {/* <CommentList />
                    <li>
                        <span>2username</span>
                        <span>2comment</span>
                        <span>unlike</span>
                    </li>
                    <li>
                        <span>3username</span>
                        <span>3comment</span>
                        <span>unlike</span>
                    </li>
                    <li>
                        <span>4username</span>
                        <span>4comment</span>
                        <span>unlike</span>
                    </li> */}
                </ul>
                <div className="inputContainer">
                    <input type="text" placeholder="Comment your..." />
                    <button>CMT</button>
                </div>

                {/* Content 컴포넌트로 props주기 */}
                <h1> 현재 페이지는 Parent Component </h1>
                <Content changeColor={this.state.childTitleColor} subTitleState={this.state.isH3Hidden} changeH3State={this.handleH3State} />
            </div>
        );
    }
}

export default Comment;
