import React, { useState, useEffect  } from "react";

//Ingredient Card
function IngredientCard(props) {
    const {ingredient} = props
    let {name,score,organToxicology,ecoToxicology} = ingredient
    return(
        <div className="card" style={{display:"inline-block",width:"100%",zIndex:0}}>
            <p>{name}</p>
            <p>{score}</p>
            <p>{organToxicology}</p>
            <p>{ecoToxicology}</p>
        </div>
    )
}

export default IngredientCard