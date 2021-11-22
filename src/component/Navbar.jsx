import React from 'react'
import {  Row,  Navbar } from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <div>
            <Row className="mt-4">
                <Navbar.Brand href="#Planets" className="text-dark">{props.title}</Navbar.Brand>
            </Row>
        </div>
    )
}

export default Navigation;
