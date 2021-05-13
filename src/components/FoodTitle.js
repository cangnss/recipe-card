import React from 'react'

function FoodTitle(props) {
    const circleStyles = {
        backgroundColor:"orange",
        color:"white",
        width:"50px",
        height:"50px"
    };
    return (
        <div className="d-flex">
            <div className="rounded-circle" style={circleStyles}>
                <p className="ps-3 pt-2 fw-bold fs-5">{props.author[0]}</p>
            </div>
            <div className="lh-1 ms-3">
                <h4 className="fw-bold">{props.foodName}</h4>
                <p>{props.foodDate}</p>
            </div>
        </div>
    )
}

export default FoodTitle;
