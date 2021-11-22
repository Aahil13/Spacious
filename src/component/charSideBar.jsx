import React from 'react'
import Close from "./images/assets/icon-close.png"
import { Button, Row } from 'react-bootstrap';
import Navigation from './Navbar';
import SideBarCharacters from './charsideCharacters';

const CharSideBar = () => {
    return (
        <div>
            <div className='loading-img-box mb-5'>
                <div className='d-flex justify-content-end'>
                    <Button variant="light" className='close'><img src={Close} alt="close" /></Button>
                </div>
                <Navigation
                    title="Jane Cooper"
                />
                <p>Jane is really a nice person. She’s been living on planet Alpha for the last 10 years.</p>
                <Row>
                    <div className='col-md-6'>
                        <p className='mb-0'>Planet</p>
                        <h5>Alpha</h5>
                    </div>
                    <div className='col-md-6'>
                        <p className='mb-0'>Friends</p>
                        <h5>23</h5>
                    </div>
                </Row>
                
                
                <div className='my-4'>
                    <h6 className='mb-0'>FRIENDS</h6>
                </div>
                <SideBarCharacters/>
            </div>
        </div>
    )
}

export default CharSideBar
