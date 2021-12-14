/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Recipe.css';

const Recipe = ({ setShowRecipe }) => {
    const [state, setState] = useState(null);
    useEffect(async () => {
        const res = await axios.get('https://github-externship.herokuapp.com/get-data-pb-and-j')
        setState(res.data.data);
    })
    const Ingredients = state && state[1].source;
    const About = state && state[0]
    const Directions = state && state[2].source
    const Plating_Suggestions = state && state[3].source
    return (
        <div className="Recipe">
            <span className="back" onClick={() => setShowRecipe(false)}><strong>⬅</strong> Back</span>
            <p className="Header"><strong>Recipe</strong></p>
            <div className="Items">
                <p className="Head"><strong>About</strong></p>
                <div className="About">
                    <p>{About && About["source"]}</p>
                </div>
                <p className="Head"><strong>Ingredients</strong></p>
                <div className="Ingredients">
                    <div>
                        <p>Peanut Butter</p>
                        <ul>{Ingredients && Ingredients["Peanut Butter"].map(element => <li key={element.id}>{element.source}</li>)}</ul>
                    </div>
                    <div>
                        <p>Jelly</p>
                        <ul>{Ingredients && Ingredients["Jelly"].map(element => <li key={element.id}>{element.source}</li>)}</ul>
                    </div>
                    <div>
                        <p>Bread</p>
                        <ul>{Ingredients && Ingredients["Bread"].map(element => <li key={element.id}>{element.source}</li>)}</ul>
                    </div>
                </div>
            </div>
            <p className="Head"><strong>Directions</strong></p>
            <div className="Directions">
                {Directions && Directions.map(element => (
                    <div key={element.step}>
                        <p>Step {element.step}:</p>
                        <p>{element.source}</p>
                    </div>
                ))}
            </div>
            <p className="Head"><strong>Plating Suggestions</strong></p>
            <div>
                {Plating_Suggestions && Plating_Suggestions.map(element => (
                    <img src={element} alt={element} />
                ))}
            </div>
        </div>
    )
}

export default Recipe
