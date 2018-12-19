import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SingleComment extends Component {
  
    render() {
        return (
            <Link  style={{ textDecoration: 'none', color:'black' }} to={`/videos/comments/${this.props.id}`}>
                <div className="singlecomment__section">
                <img  onClick={this.props.deletecomment} className="delete" alt="delete" src="/Assets/Icons/baseline-delete-24px.svg"/>
                    <img className="user" alt="username" src="/Assets/Images/donaldson.jpg" ></img>
                    <div className="comment">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.comment}</p>
                    </div>
                </div>
            </Link>
        );
    }
  }
  export default SingleComment