import React from 'react'
import Plusbtn from './images/assets/Vector.png' ;

const formShow = () =>{
    document.getElementsByClassName("PlanetFormEdit")[0].classList.toggle("PlanetForm");
}

const Buttons = () => {
    return (
        <button className='plus-button' onClick={() => {
          formShow();
        }}>
            <img src={Plusbtn} alt="Logo" />
        </button>
    )
}

export default Buttons;
