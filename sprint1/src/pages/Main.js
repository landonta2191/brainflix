import React, { Component } from 'react';
import MainBar from "./MainBar";
import VideoList from "./VideoList";

class Main extends Component {
    
    render() {

    console.log(serverdata)
      return (
        <main>
          <MainBar serverdata={this.props.object}></MainBar>
          <VideoList videosArray={this.props.list} ></VideoList>
        </main> 
      );
    }
  }
export default Main;