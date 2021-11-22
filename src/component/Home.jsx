import React from 'react'
import { Container} from 'react-bootstrap';
import Navigation from './Navbar';
import {ReactComponent as Logo} from './images/assets/planet-loader.svg' ;
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Container>
                <Navigation 
                    title="Spacious"
                />
                <div className="d-flex justify-content-center loading-img">
                    <div className='loading-img-box'>
                        <NavLink to="Planets"><Logo /></NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home;
