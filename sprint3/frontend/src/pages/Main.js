import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import MainBar from "./MainBar";
import VideoList from "./VideoList";
const uuidv1 = require('uuid/v1');
const timestamp = require('time-stamp');


// const API_KEY = '406d1d67-cd68-4d5f-be46-11656b50339d';
const baseUrl = 'http://localhost:8080/';
const endpoint= "videos";
// const queryString= "?api_key=" + API_KEY;
const endpoint1= "/comments";
// const queryString1= "/?api_key=" + API_KEY;
class Main extends Component {
    state = {
        serverdata: [],
        serverobject: {
          comments:[]
        }
    }
    //GET REQUEST
    componentDidMount() {
        //GET LIST VIDEO
        fetch(baseUrl+ endpoint)
        .then(response  => response.json())
        .then (data => {
        this.setState({
        serverdata: data,
        })
      })
        .catch( error => {
          console.log(error);
        })
        
        //GET VIDEO
        fetch("http://localhost:8080/videos/1edc16bd-1bad-418b-bd40-c72ddd926672")
        .then(response  => response.json())
        .then (data => {
        this.setState({
        serverobject: data,
        })
      })
        .catch( error => {
          console.log(error)
        })
    } 
    componentDidUpdate(prevProps,prevState) {
      console.log(prevProps);
      
      if (this.props.match.params.id !== prevProps.match.params.id ) {
        return (
            fetch(baseUrl+ endpoint + "/" + this.props.match.params.id)
            .then(response  => response.json())
            .then (data => {
            this.setState({
            serverobject: data,
            })
          })
            .catch( error => {
              console.log(error)
            })
            ) 
          }
        }
      // POST COMMENT
        submitcomment = (e) => {
          e.preventDefault();
           const body= {
             name: "landon",
             comment: e.target.comment.value,
             id: uuidv1(),
             timestamp: timestamp('YYYYMMDD')
          }
          const init = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "content-type": "application/json"
          }
          };
          fetch(baseUrl+ endpoint + "/" + this.props.match.params.id + endpoint1, init)
          .then(resp => resp.json())
          .then(data => {
            debugger;
            console.log(data);
            return (
          fetch(baseUrl+ endpoint + "/" + this.props.match.params.id)
          .then(resp => resp.json())
          .then(data => {
            debugger;
            console.log(data);
            this.setState({
              serverobject: data,
              })
          }))
         })
         .catch( error => {
          console.log(error)
        })   
      }

    // DELETE COMMENT
    deletecomment = (e) => {
      e.preventDefault();
      alert('event handler works')
      const init= {
        method: 'DELETE',
        headers: {
              'content-type': 'application/json'
        }
      }
    //   fetch(baseUrl+ endpoint + "/" + this.props.match.params.id + endpoint1, init)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     debugger;
    //     console.log(data);
    //     return (
    //   fetch(baseUrl+ endpoint + "/" + this.props.match.params.id)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     debugger;
    //     console.log(data);
    //     this.setState({
    //       serverobject: data,
    //       })
    //   }))
    //  })
    //  .catch( error => {
    //   console.log(error)
    // })   
  }
    render() {
      return (
        <main>
                <MainBar
                removecomment={this.deletecomment}
                submitform={this.submitcomment}
                singleVideo={this.state.serverobject}
                videosDisplay={this.state.serverdata}>
                </MainBar>
                <VideoList videosDisplay={this.state.serverdata} ></VideoList>
        </main> 
      );
    }
  }
export default withRouter(Main);