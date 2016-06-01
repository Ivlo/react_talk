import React from 'react';
import Comment from './comment';
import style from './comment_box.css';

class CommentBox extends React.Component {
  render() {

    return(
      <div className="comment_box">
        <h1 className="comment_box_title">Comments</h1>
        <h2 className="comment_box_count">2 comments</h2>

        <ul className="comment_list">
          <Comment author="Ivlo" body="First Comment"/>
          <Comment author="Jano" body= "Second Comment"/>
        </ul>
      </div>
    )
  }
}

export default CommentBox;
