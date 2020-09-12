import React, { Component } from "react";
import { Link } from "react-router-dom";

//Error 404 page
class PageNotFound extends Component {
  render() {
    return (
      <div className="container-fluid poppin"  style={{marginTop:"50px",maxWidth:"750px",width:"100%"}}>
        <div className="row">
          <div className="col-sm-12 text-center align-middle">
            ERROR 404: Page Not Found
           
          </div>
        </div>
        
      </div>
    );
  }
}

export default PageNotFound;