import React from 'react'
import './Home.css'

const Home = ({ setShowRecipe }) => {
    return (
        <div className="App">
            <p className="Headline"><strong>A Website for making Peanut Butter & Jelly Sandwich</strong></p>
            <button onClick={() => setShowRecipe(true)}>Click here to see the Recipe ➡</button>
        </div>
    )
}

export default Home
