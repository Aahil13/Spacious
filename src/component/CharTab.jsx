import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Navigation from './Navbar';
import { NavLink } from 'react-router-dom';
import DownArrow from "./images/assets/Vectordown.png"

const CharTab = (props) => {
    return (
        <div>
            <Container className='mb-4 tabs-cont'>
                <Navigation
                    title="Spacious"
                />
                <div className='d-flex justify-content-between'>
                    <div className='butttons d-flex align-items-center'>
                        <NavLink to="Planets"><Button variant="light">PLANETS</Button></NavLink>
                        <NavLink to="Characters"><Button variant="light" className='mx-3'>CHARACTERS</Button></NavLink>
                    </div>
                    <div>
                        <Button className="planets-all-btn" variant="light"><h5>{props.name}<img className='mx-2' src={DownArrow} alt="work"/></h5></Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CharTab
