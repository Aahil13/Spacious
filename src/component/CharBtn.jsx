import React from 'react'
import Plusbtn from './images/assets/Vector.png' ;

const CharformShow = () =>{
    document.getElementsByClassName("characterEdit")[0].classList.add("characterForm");
}


const CharBtn = () => {
    return (
        <div>
            <button className='plus-button' onClick={() => {
                CharformShow();
            }}>
                <img src={Plusbtn} alt="Logo" />
        </button>
        </div>
    )
}

export default CharBtn
