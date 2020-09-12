import React, { Component } from "react";
import IngredientCard from "../IngredientCard"
class Chemicals extends Component {
  constructor(props){
    super(props);
    this.state = {
        ingredients:[{
          name: "Water",
          score:1,
          organToxicology:"Classified as not expected to be potentially toxic or harmful",
          ecoToxicology:"Not suspected to be an environmental toxin"
        },
        {
          name: "Water",
          score:1,
          organToxicology:"Classified as not expected to be potentially toxic or harmful",
          ecoToxicology:"Not suspected to be an environmental toxin"
        }]
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div  className="row" >
          <div style={{minHeight: 320}} className="col-md-4 overflow-auto">
            <h1 style={{marginTop:15}}>
                Photo Section
            </h1>
           
          </div>
          <div className="col-md-8 overflow-auto text-left">
            <h1 style={{marginTop:15}}>
                Chemicals Section
            </h1>
            {this.state.ingredients.length>0 ? <div className="card-columns">{this.state.ingredients.map((ingredient,i) => <IngredientCard key={i} ingredient={ingredient}/>)}</div>:<p>None</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Chemicals;