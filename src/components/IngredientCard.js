import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Badge, ListGroup} from 'react-bootstrap'

//Ingredient Card
function IngredientCard(props) {
    const { ingredient } = props
    let { name, score, concerns } = ingredient
    var concernList = []
    concerns.forEach(element => {
        var cat = element.category.toLowerCase()
        if(cat==="data gaps"){
            return
        }
        if(cat === "Organ system toxicity (non-reproductive)".toLowerCase()){
            cat = "Organ system toxicity"
        }
        if(cat === "Enhanced skin absorption".toLowerCase()){
            cat = "Skin Absorption"
        }
        if(cat === "Use restrictions".toLowerCase()){
            return
        }
        concernList.push({
            cat,
            text:element.strings[0]
        })
    });
    return (
        <Card   bg={    (score > 7) ? "dark" : 
                        (score > 3) ? "dark" : "light"} 
                text=   {(score > 3) ? "light" : "dark"}>
            <Card.Header as="h4" style={{textTransform: "capitalize"}}>
                {name}
                <Badge  variant={ (score > 7) ? "danger" : 
                                 ((score > 3) ? "warning" : "success")} 
                        className="float-right">
                    {score}
                </Badge>
            </Card.Header>
            <Card.Body>
                {concernList.map((concern,i) => (
                    <div>
                        <Card.Subtitle as="h6" className="mb-2" style={{textTransform: "capitalize"}}>
                            {concern.cat}
                        </Card.Subtitle>
                        <Card.Text>
                            {concern.text}
                        </Card.Text>
                        <hr color={ (score > 7) ? "#8a8a8a" : 
                                    ((score > 3) ? "#c2c2c2" : "f0f0f0")}/>
                    </div>

                ))}
                {/* <Card.Subtitle as="h6" className="mb-2">
                    Human Toxicity
                </Card.Subtitle>
                <Card.Text>
                    {concerns}
                </Card.Text>
                <hr color={ (score > 7) ? "#8a8a8a" : 
                            ((score > 3) ? "#c2c2c2" : "f0f0f0")}/> */}
                {/* <Card.Subtitle as="h6" className="mb-2">
                    Environment Toxicity
                </Card.Subtitle> */}
                {/* <Card.Text>
                    {ecoToxicology}
                </Card.Text> */}
            </Card.Body>
        </Card>
    )
}



export default IngredientCard