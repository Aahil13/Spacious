import React from 'react'
import Close from "./images/assets/icon-close.png"
import Plusbtn from './images/assets/Vector.png' ;
import { Button } from 'react-bootstrap';
import Navigation from './Navbar';
import SideBarCharacters from './SideBarCharacters';

const SideRemove = () =>{
    document.getElementsByClassName("side-bar")[0].classList.remove("show-side");
}

const ShowChar = () =>{
    document.getElementsByClassName("characterEdit")[0].classList.add("characterForm");
}

const SideBar = () => {
    return (
        <div>
            <div className='loading-img-box mb-5 side-bar'>
                <div className='d-flex justify-content-end'>
                    <Button variant="light" className='close' onClick={SideRemove}><img src={Close} alt="close" /></Button>
                </div>
                <Navigation
                    title="Planet Alpha"
                    className='planetAlphaHead'
                />
                <p>Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>
                <p className='mb-0'>Population</p>
                <h5>234</h5>
                <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='mb-0'>CHARACTERS</h6>
                    <Button variant="light" className='close' onClick={ShowChar}><img className='plus' src={Plusbtn} alt="Logo" /></Button>
                </div>
                <SideBarCharacters/>
            </div>
        </div>
    )
}

export default SideBar
