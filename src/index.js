import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card';
import food from './components/FoodImg';

function App() {
    const recipeItem = {
        author:"Kodluyoruz",
        title:"Avokado Ezmeli Taco",
        date:"12 Ocak 2021,Salı",
        like:"193",
        image:food,
        description:"Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar."
    }
    return (
        <Card data={recipeItem} />
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);