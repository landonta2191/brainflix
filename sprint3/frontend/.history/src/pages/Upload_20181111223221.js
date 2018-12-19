import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Upload extends Component {
  render() {
    return (
      <div className="upload" className="upload1">
        <Link to="/form" style={{ textDecoration: 'none', color:'black' }}>
          <div tabindex="0" className="upload--container">
            <img className="upload--container__video" src="/Assets/Icons/Large Upload.svg"></img>
            <h1>Select files to upload</h1>
            <p>or drag and drop video files</p>
          </div>
        </Link>
      </div>
    )
  }
}
