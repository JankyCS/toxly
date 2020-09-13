import React, { Component } from "react";
import IngredientCard from "../IngredientCard"
import {Card, Container, Image} from 'react-bootstrap'

class Chemicals extends Component {
  constructor(props){
    super(props);
    this.state = {
        ingredients:null,
        ingredientsDetails:[],
        image:null,
        img64:null,
        word:"",
        loading:false
        // ingredientsDetails: [{
        //   name: "Water",
        //   score:1,
        //   organToxicology:"Classified as not expected to be potentially toxic or harmful",
        //   ecoToxicology:"Not suspected to be an environmental toxin"
        // },
        // {
        //   name: "Palm Oil",
        //   score:3,
        //   organToxicology:"Not Bad",
        //   ecoToxicology:"Bad For environment"
        // },
        // {
        //   name: "Cyanide",
        //   score:5,
        //   organToxicology:"Will kill you if ingested",
        //   ecoToxicology:"Affects fishies oh NO"
        // }]
    }
  }

  componentDidMount(){
    //Make the api call and then
    // this.setState(()=>{
    //   return {ingredients:[]}
    // })
  }

  
    onImageChange = async event => {
      if (event.target.files && event.target.files[0]) {
        let img = await event.target.files[0];
        var url=await URL.createObjectURL(img);
        // this.setState({
        //     image: url
        // });
        console.log("pog"+url);
        
        var reader = new FileReader();
        reader.readAsDataURL(img); 
        reader.onloadend = async () => {
          var base64data = reader.result;                
          //console.log(base64data);
          //console.log(base64data.substr(base64data.indexOf(',')+1))
          var pic=base64data.substr(base64data.indexOf(',')+1)
          this.setState({img64:pic,image:url})
          this.goToIng();
        }
      }  
    };

    goToIng = async () => {
      this.setState({loading:true})
      const body = {
        requests:[
          {
            image:{
              content:this.state.img64//"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"
            },
            features: [
              {
                type:"TEXT_DETECTION",
                maxResults: 1
              }
            ]
        }
        ]
      }

      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }

      console.log(requestOptions)
      var i = await fetch('https://vision.googleapis.com/v1/images:annotate?key='+process.env.REACT_APP_API_KEY, requestOptions)
      .then(response => {
      const r = response.json()
        //console.log("R is "+JSON.stringify(r))
        //this.setState({word:JSON.stringify(r)})
        return r
      })
      //console.log("i is"+JSON.stringify(i))
      // this.setState({word:JSON.stringify(i),loading:false})
      var allText = i.responses[0].textAnnotations[0].description
      allText = allText.toLowerCase()
      var i = allText.indexOf("ingr")
      allText=allText.substring(i)
      allText = allText.substring(allText.indexOf(" "), allText.indexOf("."))
      allText = allText.replace("\n","")
      allText = allText.replace("/",",")
      allText = allText.replace(/\s*,\s*/g, ",");
      var ingArr = allText.split(',');
      this.setState({ingredients:ingArr})
      var details = []
      // requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({substance:"water"})
      // }
      // var t = await fetch("https://us-central1-toxly-289322.cloudfunctions.net/getInfo",requestOptions).then(
      //   res=>{
      //     const r = res.json()
      //     return  r
      //   }
      // )
      // console.log(t)
      ingArr.forEach(async element => {
        //console.log("poggers22")
        requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({substance:element})
        }
        var e = await fetch("https://us-central1-toxly-289322.cloudfunctions.net/getInfo", requestOptions).then(
          (res)=>{
            if(!res.headers.get('content-type').startsWith('text')){
              console.log("element before break"+element)
              const r = res.json()
              return r
              // console.log(JSON.stringify(r))
            }
          }
        )
        if(e&&e.score>1){
           console.log(e)
            e.name=element
            details.push(e)

          this.setState({ingredientsDetails:details})
        }
       
      });
      

      //console.log(details.toStrin)
       setTimeout(() => {
         this.setState({loading:false})
      }, 4000);
  }

  render() {
    return !this.state.loading ? (
      <div className="container-fluid">
        <div  className="row" >
          <Card style={{minHeight: 320}} className="col-md-4 overflow-auto" bg="dark" text = "light">
            <Card.Header as="h5">
                Photo Section
            </Card.Header>  
            <Card.Body style ={{marginTop:"40vh"}}>
                <Image src = "https://www.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png" style={{filter:"invert(50%)",width:"30px", height:"auto"}} />
                <Card.Text style={{filter:"invert(50%)"}}> Click in this box to add a photo!</Card.Text>
            </Card.Body>
            <input type="file" ref="uploadPhoto" name="myImage" onChange={this.onImageChange} accept="image/*" style = {{display:"none"}}/>
            {this.state.image ? <img src={this.state.image} alt=""  width="100%"/>: null}
            {/* <p>{this.state.ingredients?this.state.ingredients.toString():null}</p> */}
          </Card>
          <div className="col-md-8 overflow-auto text-left" style={{height:"100vh"}}>
            <h1 style={{marginTop:15}}>
                Chemicals Section
            </h1>
            {/* {this.state.ingredientsDetails.toString()} */}
            {this.state.ingredientsDetails && this.state.ingredientsDetails.length>0 ? <div className="card-columns">{this.state.ingredientsDetails.map((ingredient,i) => <IngredientCard key={i} ingredient={ingredient}/>)}</div>:<p>None</p>}
          </div>
        </div>
      </div>
    ): <div className="align-middle" style={{paddingTop:"40vh"}}><div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div><br/>
    Loading...</div>;
  }
}

export default Chemicals;