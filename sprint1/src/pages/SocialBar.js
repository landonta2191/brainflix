import React, { Component } from 'react';


class SocialBar extends Component {
    render() {
      return (
        <nav class="socialbar">
          <ul>
            <li class="search">
              <form class="search__bar">
                <input class="search__bar--input" placeholder="Search..." />
                <a href="#"><img src="/Assets/Icons/Search.svg"></img></a>
              </form>
            </li>
            <li class="upload-video"><a href="#">UPLOAD<img className="upload-video" src="/Assets/Icons/Content Upload.svg"></img></a></li>
            <li class="twitter"><a href="#">TWITTER<img src="/Assets/Icons/twitter-logo.svg"></img></a></li>
            <li class="facebook"><a href="#">FACEBOOK<img src="/Assets/Icons/facebook-letter-logo.svg"></img></a></li>
            {/* <li class="instagram"><a href="#">INSTAGRAM<img src="/Assets/Icons/instagram (1).svg"></img></a></li> */}
          </ul>
        </nav>
      )
  }
  }
  
  export default SocialBar;