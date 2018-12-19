import React, { Component } from 'react'

export default class UploadForm extends Component {
  render() {
    return (
      <div className="uploadpage">
       <div className="uploadform">
        {/* <div className="uploadform--leftside">
            <img className="user" src="/Assets/Images/donaldson.jpg" ></img>
            <h4>Upload Status:</h4>
            <p>Processing</p>
        </div> */}
       {/* <div className="uploadform--rightside">
            <div>
                <h4>Processing 80%</h4>
                <p>Click "Publish" to make your video live</p>
            </div> */}
            <form>
                <h2>Basic Information</h2>
                <div className="uploadform--container">
                    <label for="title">Title</label>
                        <input type="text" name="title" placeholder="Add a title to your video"></input>
                    <label for="description">Descrition</label>
                        <input type="text" name="description" placeholder="Add a description of your video"></input>
                    <label for="tags">Tags</label>
                        <input type="text" name="tags" placeholder="(e.g., albert einstein, flying pig, mashup, videos)"></input>

                    <select id="country" name="country">
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <button type="submit" value="Submit">Publish</button>         
            </form>
        </div>
    </div>     
    )
  }
}
