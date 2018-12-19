import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import MainBar from "./MainBar";
import VideoList from "./VideoList";

const API_KEY = '406d1d67-cd68-4d5f-be46-11656b50339d';
const baseUrl = 'https://project-2-api.herokuapp.com/';
const endpoint= "videos";
const queryString= "?api_key=" + API_KEY;
const endpoint1= "/videos/";
const queryString1= "/?api_key=" + API_KEY;
class Main extends Component {
    state = {
        serverdata: [],
        serverobject: {
          comments:[]
          //fetch needs time to load the data. thats why its console log three times 
          //bc it rerenders 2 times everytime u set the state
        }
      
    }
    //GET REQUEST
    // Call component did mount once because when call the 
    // function twice i will get only the most recent one
    componentDidMount() {
        //GET LIST VIDEO
        fetch(baseUrl+ endpoint + queryString)
        .then(response  => response.json())
        .then (data => {
        console.log(data);
        this.setState({
        serverdata: data,
        })
      })
        .catch( error => {
          console.log(error)
        })
        //GET VIDEO
        fetch("https://project-2-api.herokuapp.com/videos/1edc16bd-1bad-418b-bd40-c72ddd926672?api_key=406d1d67-cd68-4d5f-be46-11656b50339d")
        .then(response  => response.json())
        .then (data => {
        console.log(data);
        this.setState({
        serverobject: data,
        })
      })
        .catch( error => {
          console.log(error)
        })
    } 
    componentDidUpdate(prevProps,prevState) {
      // console.log(this.prevProps.match.params.id)
      console.log(this.props) 
      if (this.props.match.params.id !== prevProps.match.params.id ) {
        return (
            fetch(baseUrl+ endpoint + "/" + this.props.match.params.id + queryString)
            .then(response  => response.json())
            .then (data => {
            console.log(data);
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
        submitcomment = (e) => {
          e.preventDefault();
           const body= {
             name: "landon",
             comment: e.target.comment.value,
          }
          const init = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "content-type": "application/json"
          }
          };
          console.log(baseUrl+ endpoint1 + this.props.match.params.id+ queryString1)

          fetch(baseUrl+ endpoint1 + this.props.match.params.id+ queryString1, init)
          .then(resp => resp.json())
          .then(data => {
            debugger;
            console.log(data);
            this.setState({
              serverobject: data,
            })
         })
         .catch(console.log)
        }
    render() {
      return (
        <main>
                <MainBar
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