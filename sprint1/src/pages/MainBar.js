import React, { Component } from 'react';
import VideoSection from "./VideoSection";
import TitleSection from "./TitleSection ";
import CommentSection from "./CommentSection";

class MainBar extends React.Component {
    
    
    render() {
      return (
        <section className="mainbar">
                  <VideoSection videosobject={this.props.serverdata}></VideoSection>
                  <TitleSection videosobject={this.props.serverdata}></TitleSection>
                  <CommentSection videosobject={this.props.serverdata}></CommentSection>
        </section>
      );
    }
  }
  
  export default MainBar;