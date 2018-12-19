import React, { Component } from 'react';
import SingleComment from "./SingleComment";
class CommentSection extends Component {
    render() {
      let commentslist = this.props.singleVideo.comments;     
      const commentsElements = commentslist.map((comments) => { 
        return<SingleComment
        id= {comments.id}
        name= {comments.name}
        comment= {comments.comment}
        />
        });
      return (
        <section className="comments__section">
          <div className="comments__section--form">
            <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
            <form  onSubmit={this.props.submitform} className="comments__form" id = "comment-form" action="" >
                  <input type="text" name="comment" placeholder="Add a public comment"/>
                  <div className="comments__form--button">
                    <button className="cancel" type="click">CANCEL</button>
                    <button type="submit">COMMENT</button>
                  </div>
            </form>
          </div>
          <div className="comments__section--display">
            <div className="show">
              {commentsElements}
            </div>
          </div>
        </section>
      );
    }
  }


  
  export default CommentSection;