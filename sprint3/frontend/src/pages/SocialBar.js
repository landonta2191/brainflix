import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SocialBar extends Component {
    render() {
      return (
        <nav className="socialbar">
          <ul>
            <li className="search">
              <form className="search__bar">
                <input className="search__bar--input" placeholder="Search..." />
                <Link to="/"><img alt="search" src="/Assets/Icons/Search.svg"></img></Link>
              </form>
            </li>
            {/* <li className="upload-video"><Link to="/upload">UPLOAD<img className="upload-video" src="/Assets/Icons/Content Upload.svg"></img></Link></li>
            <li className="twitter"><Link to="/">TWITTER<img src="/Assets/Icons/twitter-logo.svg"></img></Link></li>
            <li className="facebook"><Link to="/">FACEBOOK<img src="/Assets/Icons/facebook-letter-logo.svg"></img></Link></li> */}
          </ul>
        </nav>
      )
  }
  }
  export default SocialBar;