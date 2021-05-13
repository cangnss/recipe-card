import React from 'react'

function FoodDescription(props) {

    function changeColor(e){
        if(e.target.className='fas fa-heart fa-2x'){
            e.target.style.color = 'red';
        }
    }

    return (
        <div className="w-75 mt-2 ms-2">
            <span>{props.desc}</span>
            <div className="mt-3 d-flex justify-content-between">
                <i className="fas fa-heart fa-2x" onClick={changeColor}></i>
                <p><strong>{props.likeCount}</strong>kişi bu tarifi beğendi.</p>
            </div>
        </div>
    )
}
export default FoodDescription;
