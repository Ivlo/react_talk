import React from 'react';
import Comment from './comment';

class CommentBox extends React.Component {
  render() {
    const comments = this._getComments();
    return(
      <div className="comment_box">
        <h1>Comments</h1>
        <h2 className="comment_count">{comments.length} comments</h2>

        <ul className="comment_list">
          {comments}
        </ul>
      </div>
    )
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Iván López Marsella', body: 'Comment1'},
      { id: 2, author: 'Alejandro Rodriguez', body: 'Comment2'},
      { id: 3, author: 'Alejandro Rodriguez', body: 'Comment2'}
    ]

    return commentList.map((comment) => {
      return (
        <Comment
          author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }
}

export default CommentBox;



