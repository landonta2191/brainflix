import React, { Component } from 'react';

class SingleComment extends Component {
    render() {
        return (
            <div className="singlecomment__section">
                <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
                <div className="comment">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.comment}</p>
                </div>
            </div>
        );
    }
  }
  export default SingleComment