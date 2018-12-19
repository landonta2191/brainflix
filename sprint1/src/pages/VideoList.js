import React, { Component } from 'react';
import {Link} from "react-router-dom"
import SingleVideo from "./SingleVideo";

class VideoList extends React.Component {
    render() {
  
      let videos= this.props.videosArray;
      const videoElements= videos.map((video) => {
        return <Link style={{ textDecoration: 'none', color:'black' }} to={`/videos/:${video.id}`}>
        <SingleVideo
        id= {video.id}
        title= {video.title}
        channel= {video.channel}
        views= {video.views}
        src= {video.image}
        duration={video.duration}
        ></SingleVideo></Link>
    });
  
     return (
         <section className="listvideo">
          <h5>Up Next</h5>
          {videoElements}
         </section>
      );
    }
  }
 export default VideoList;