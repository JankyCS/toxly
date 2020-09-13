import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Badge, ListGroup} from 'react-bootstrap'

//Ingredient Card
function IngredientCard(props) {
    const { ingredient } = props
    let { name, score, concerns } = ingredient

    return (
        <Card   bg={    (score > 7) ? "dark" : 
                        (score > 3) ? "secondary" : "light"} 
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
                        <Card.Subtitle as="h6" className="mb-2">
                            Human Toxicity
                        </Card.Subtitle>
                        <Card.Text>
                            {/* {concerns} */}
                        </Card.Text>
                        <hr color={ (score > 7) ? "#8a8a8a" : 
                                    ((score > 3) ? "#c2c2c2" : "f0f0f0")}/>
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