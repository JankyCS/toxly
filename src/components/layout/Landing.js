import React, { Component } from "react";
import { Link } from "react-router-dom";

// Landing/homepage
class Landing extends Component {
  render() {
    //Redirect if logged in
    if(this.context.loggedIn){
      this.props.history.push("/fridge");
    }
    return (
      <div className="container-fluid poppin" >
        <div className="row align-items-center" style={{textAlign:"center",verticalAlign: "middle"}}>
            <div className="col-lg-5" style={{textAlign:"Left",padding:"10vh 5vw 0px 5vw"}}>
              <h1 style={{fontSize:45,fontWeight:700}}>Your Toxicology Managems aokosdjosa App</h1>
              <p>Poggers
                <br/>
                <br/>
                Start seeing your ingredients today idk be healthier
              </p>
              
            </div>
            <div className="col-lg-7 align-middle">
              <img src="https://thumbs.dreamstime.com/b/mockup-laptop-tablet-pc-mobile-phone-blank-screen-responsive-web-design-devices-consisting-adaptive-presentation-176038032.jpg" alt="mockup" style={
                {marginLeft: "auto",
                marginRight: "auto",
                padding:"5vh 5vw 5vh 0px",
                height: "100vh",
                }}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Landing;