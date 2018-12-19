import React, { Component } from 'react';

const API_KEY = '406d1d67-cd68-4d5f-be46-11656b50339d';
const queryString= "?api_key=" + API_KEY;
class VideoSection extends  Component {
    render() {
      let videos= this.props.videosobject;
      return (
        <section className="video__section">
          <video
            controls poster={videos.image}
            src= {videos.video + queryString} 
            type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <p>{videos.title}</p>
          <div className="video__section--comments">
            <p className="video__section--views">{videos.views}</p>
            <div className="video__section--icons">
              <div>
                <img className="up" src="/Assets/Icons/Thumbs Up.svg" ></img>
                <h5>{videos.thumbsUp}</h5>              
              </div>
              <div>
                <img className="down" src="/Assets/Icons/Thumbs Down.svg" ></img>
                <h5>{videos.thumbsDown}</h5>
              </div>
              <div>
                <img className="share" src="/Assets/Icons/Share.svg"></img>
                <h5>SHARE</h5>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default VideoSection;