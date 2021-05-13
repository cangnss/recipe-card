import React from 'react'
import FoodTitle from './FoodTitle';
import FoodImg from './FoodImg';
import FoodDescription from './FoodDescription';
import './Card.css';

function Card(props) {
    return (
        <div className="card shadow-lg p-4 ms-5 mt-4">
            <FoodTitle author={props.data.author} foodName={props.data.title} foodDate={props.data.date}/>
            <FoodImg img={props.data.image} />
            <FoodDescription likeCount={props.data.like} desc={props.data.description} />
        </div>
    )
}
export default Card;