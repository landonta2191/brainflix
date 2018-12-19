import React, { Component } from 'react';
import SingleComment from "./SingleComment";


class CommentSection extends Component {
  
    render() {
      let commentslist = this.props.videosobject.comments;
      console.log(commentslist)
      // const commentsElements= commentslist.map((comments) => { 
      //   return<SingleComment
      //   id= {comments.id}
      //   name= {comments.name}
      //   comment= {comments.comment}
      //   />
      //   });

      // let commentarray= [];
      // for ( let i=0; i < commentslist.length; i++) {
      //     let commentdata= <SingleComment
      //     name= {commentslist[i].name}
      //     comment= {commentslist[i].comment}
      //   ></SingleComment>
      //   commentarray.push(commentdata);
      // }
      // console.log(commentarray)

      return (
        <section className="comments__section">
          <div className="comments__section--form">
            <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
            <form className="comments__form" id = "comment-form" action="">
                  <input type="text" name="FirstName" placeholder="Add a public comment"/>
                  <div class="comments__form--button">
                    <button className="cancel" type="click">CANCEL</button>
                    <button type="submit">COMMENT</button>
                  </div>
            </form>
          </div>
          <div class="comments__section--display">
          <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
            <div className="show">
              {/* {commentsElements} */}
            </div>
          </div>
        </section>
      );
    }
  }


  
  export default CommentSection;