import React from 'react'
import { Container, Button } from 'react-bootstrap';
import Navigation from './Navbar';
import { NavLink } from 'react-router-dom';

const Tabs = (props) => {
    return (
        <div>
            <Container className='mb-4'>
                <Navigation
                    title="Spacious"
                />
                <div>
                    <div className='butttons d-flex align-items-center'>
                        <NavLink to="Planets"><Button variant="light">PLANETS</Button></NavLink>
                        <NavLink to="Characters"><Button variant="light" className='mx-3'>CHARACTERS</Button></NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Tabs;
