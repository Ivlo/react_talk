import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <li className="comment">
        <div className="comment_header">{this.props.author}</div>
        <p className="comment_body">{this.props.body}</p>
        <div className="comment_footer">
          <a href="">Delete comment</a>
        </div>
      </li>
    )
  }
}

export default Comment;
