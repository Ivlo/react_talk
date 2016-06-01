import React from 'react';
import Comment from './comment';

class CommentBox extends React.Component {
  render() {
    const styles = {
      comment_box_title: {
        fontSize: 40,
        color: "#4e69a2",
      },
      comment_box_count: {
        fontSize: 30,
        color: "black",
        border: "4px solid red",
      }
    }
    return(
      <div className="comment_box">
        <h1 className="comment_box_title" style={styles.comment_box_title}>Comments</h1>
        <h2 className="comment_box_count" style={styles.comment_box_count}>2 comments</h2>

        <ul className="comment_list">
          <Comment author="Ivlo" body="First Comment"/>
          <Comment author="Jano" body= "Second Comment"/>
        </ul>
      </div>
    )
  }
}

export default CommentBox;
