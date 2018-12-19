import React, { Component } from 'react';
import { Link} from "react-router-dom";
class NavBar extends Component {
    render() {
      return (
        <header className="header">
              <div className="header__logo">
              <Link to={"/"}><img className="logo-photo" src="/Assets/Icons/BrainFlix Logo.svg"></img></Link>
              </div>
              <form className="header__links header__links--right">
                <input className="search" placeholder="Search..." />
                <button className="search-button"><img src="/Assets/Icons/Search.svg"></img></button>
              </form>
              <Link to={"/upload"}><img className="upload-video" src="/Assets/Icons/Content Upload.svg"></img></Link>
              <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
        </header>
      );
    }
  }
export default NavBar;