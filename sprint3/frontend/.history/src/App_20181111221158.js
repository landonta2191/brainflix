import React, { Component } from 'react';
import './App.css';
import NavBar from "./pages/NavBar";
import SocialBar from "./pages/SocialBar";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Main from "./pages/Main"
import Upload from "./pages/Upload"
import UploadForm from './pages/UploadForm';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <NavBar/>
        <SocialBar/>
          <Switch>
            <Route path='/' exact render = {() => <Redirect to='/videos/e5bc244e-be4c-4925-acce-3e3aa7069706' />} />     
            <Route path="/videos/:id" render={ (props) => { return <Main props={props} {...this.state} /> } }/>  
            <Route path='/upload' component={Upload}/>        
            <Route path='/form' exact component={UploadForm}/>        
          </Switch>
        </div>
      </Router>  
    </div>
    );
  }
}
export default App;
