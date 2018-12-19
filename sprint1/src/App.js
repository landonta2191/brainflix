import React, { Component } from 'react';
import './App.css';
import NavBar from "./pages/NavBar";
import SocialBar from "./pages/SocialBar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from "./pages/Main"


const API_KEY = '406d1d67-cd68-4d5f-be46-11656b50339d';
const baseUrl = 'https://project-2-api.herokuapp.com/';
const endpoint= "videos";
const queryString= "?api_key=" + API_KEY;


class App extends Component {
  state = {
    serverlist: [],
    serverdata: {}
  }
//GET REQUEST FOR SIDE BAR
  componentDidMount() {
      fetch(baseUrl+ endpoint + queryString)
      .then(response  => response.json())
      //now we have data
      .then (data => {
      //now we wanna put restate=> set state
      this.setState({
      serverlist: data,
      })
    })
    console.log(serverlist)
      .catch( error => {
        console.log(error)
      })
  } 

//GET REQUEST FOR SINGLE VIDEO
componentDidMount() {
    fetch("https://project-2-api.herokuapp.com/videos/1edc16bd-1bad-418b-bd40-c72ddd926672?api_key=406d1d67-cd68-4d5f-be46-11656b50339d")
    .then(response  => response.json())
    //now we have data
    .then (data => {
    console.log(data);
    //now we wanna put restate=> set state
    this.setState({
    serverdata: data,
    })
  })
    .catch( error => {
      console.log(error)
    })
} 

  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <NavBar/>
        <SocialBar/>
          <Switch>
            <Main
            object={this.state.serverdata}
            list={this.state.serverlist} 
            ></Main>
            <Route path={"/main"} exact component={Main} />
            <Route path={"/"} component={Main}/>           
        </Switch>
        </div>
      </Router>  
    </div>
    );
  }
}
export default App;
