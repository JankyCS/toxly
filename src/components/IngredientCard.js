import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Badge, ListGroup} from 'react-bootstrap'

//Ingredient Card
function IngredientCard(props) {
    const { ingredient } = props
    let { name, score, organToxicology, ecoToxicology } = ingredient

    return (
        <Card   bg={    (score > 3) ? "dark" : 
                        (score > 1) ? "secondary" : "light"} 
                text=   {(score > 2) ? "light" : "dark"}>
            <Card.Header as="h4">
                {name}
                <Badge  variant={ (score > 3) ? "danger" : 
                                 ((score > 1) ? "warning" : "success")} 
                        className="float-right">
                    {score}
                </Badge>
            </Card.Header>
            <Card.Body>
                        <Card.Subtitle as="h6" className="mb-2">
                            Human Toxicity
                        </Card.Subtitle>
                        <Card.Text>
                            {organToxicology}
                        </Card.Text>
                        <hr color={ (score > 3) ? "#8a8a8a" : 
                                    ((score > 1) ? "#c2c2c2" : "f0f0f0")}/>
                        <Card.Subtitle as="h6" className="mb-2">
                            Environment Toxicity
                        </Card.Subtitle>
                        <Card.Text>
                            {ecoToxicology}
                        </Card.Text>
            </Card.Body>
        </Card>
    )
}



export default IngredientCard