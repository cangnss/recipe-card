import React from 'react'
import food from '../assets/food.jpg'

function FoodImg(props) {
    return (
        <div>
            <img src={food} style={{borderRadius:'15px'}} className="img-fluid ps-2 pe-2" />
        </div>
    )
}
export default FoodImg;