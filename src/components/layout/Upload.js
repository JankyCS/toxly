import React, { Component } from "react";
import { Link } from "react-router-dom";

// User Login Page
class Upload extends Component {
  constructor() {
    super();
    this.state = {
        image:null
    };

  }
  
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
            image: URL.createObjectURL(img)
        });
        }
    };


  render() {
    return (
      <div className="container-fluid poppin"  style={{marginTop:"50px",maxWidth:"750px",width:"100%"}}>
        <div className="row">
          <div className="col-sm-12">
            <div>
              <h3>Upload a Picture of the Ingredients List</h3>
              <input type="file" name="myImage" onChange={this.onImageChange} /><br/>
              <img src={this.state.image} alt=""  height="200px"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;