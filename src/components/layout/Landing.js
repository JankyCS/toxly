import React, { Component } from "react";
import { Link } from "react-router-dom";
import mockup from "../../mockup.png"

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
              <h1 style={{fontSize:45,fontWeight:700}}>Your Product Toxicity Report.</h1>
              <p>
                <br/>
                <b>TOX.LY</b> is your personal chemical safety-report generator. Take advantage of modern A.I. and machine learning technologies to figure out what's really in your cosmetic products, and make more informed decisions. 
                <br/><br/>
                See your personal care products in a new light. Start buying healthier.
              </p>
              <Link
                to="/chemicals"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  marginBottom:20
                }}
                className="btn btn-raised btn-primary"
              >
                Get Started
              </Link>
            </div>
            <div className="col-lg-7 align-middle">
              <img src={mockup} alt="mockup" width="100%" style={
                {marginLeft: "auto",
                marginRight: "auto",
                padding:"13vh 5vw 5vh 0px",
                // height: "100vh",
                }}/>
            </div>
          </div>
        </div>
    );
  }
}

export default Landing;