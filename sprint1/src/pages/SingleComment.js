import React, { Component } from 'react';

class SingleComment extends Component {
    render() {
        return (
            <div className="singlecomment__section">
                <h1>{this.props.name}</h1>
                <p>{this.props.comment}</p>
            </div>
        );
    }
  }

  export default SingleComment