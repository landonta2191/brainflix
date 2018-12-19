import React, { Component } from 'react';

class TitleSection extends Component {
    render() {
      let videos= this.props.videosobject;
      return (
        <section className="title__section">
        <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
        <div className="title__section--description">
          <div className="title__section--username">
            <div>
                <p><span>{videos.channel}</span></p>
                <h5>Published on Oct 14, 2015</h5>
            </div>
            <button className="subscribe">SUBSCRIBE<p>{videos.subscriberCount}</p></button>
          </div>
          <p>{videos.description}</p>
          <button className="showmore"><h5>SHOW MORE</h5></button>
        </div>
        
        </section>
      );
    }
  }
  export default TitleSection;