import React, { Component } from 'react';
import VideoSection from "./VideoSection";
import TitleSection from "./TitleSection ";
import CommentSection from "./CommentSection";

class MainBar extends Component {
    
        
    render() {
      return (
        <section className="mainbar">
                <VideoSection videosobject={this.props.singleVideo}/>
                <TitleSection videosobject={this.props.singleVideo}/>
                <CommentSection
                 {...this.props}/> 
        </section>
      );
    }
  }
  
  export default MainBar;