import React, { Component } from 'react';
class NavBar extends Component {
    render() {
  
      return (
        <header class="header">
              <div class="header__logo">
              <img className="logo-photo" src="./Assets/Icons/BrainFlix Logo.svg"></img>
              </div>
              <form class="header__links header__links--right">
                <input class="search" placeholder="Search..." />
                <button class="search-button"><img src="/Assets/Icons/Search.svg"></img></button>
              </form>
              <img className="upload-video" src="/Assets/Icons/Content Upload.svg"></img>
              <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
        </header>
      );
    }
  }
export default NavBar;