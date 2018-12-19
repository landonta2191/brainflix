import React, { Component } from 'react';

class SingleVideo extends Component {
    render() {
        return (
            <div className="singlevideo__section">
                <div className="singlevideo__section--content">
                    <img alt="videoposter" src={this.props.src}></img>
                    <div className="text-block">
                        <h4>{this.props.duration}</h4>
                    </div>
                </div>
                <div className="singlevideo__section--description">
                    <h4>{this.props.title}</h4>
                    <p className="user">{this.props.channel}</p>
                    <p>{this.props.views}</p>
                </div>
            </div>
        );
    }
  }
  export default SingleVideo;