import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import Close from "./images/assets/icon-close.png"
import Jane from "./images/characters/character-2.png"
import Navigation from './Navbar';

const formRemove = () =>{
    document.getElementsByClassName("characterEdit")[0].classList.remove("characterForm");
}

const AddCharactersForm = () => {
    return (
        <div>
            <div className='d-flex justify-content-center CharForm'>
             <div className=" loading-img-box w-50">
                <div className='d-flex justify-content-end'>
                    <Button variant="light" className='close' onClick={formRemove}><img src={Close} alt="close" /></Button>
                </div>
                <Navigation
                title="Character"
                />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" />
                        <Form.Text className="text-muted">
                            Paste the URL of a JPG or PNG of max 20 kb
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Friends</Form.Label>
                            <div className='input-group'> 
                                <span className='input-group-text'>
                                    <img src={Jane} alt="jane" className='jane'/>
                                    Jane Cooper 
                                    <img src={Close} alt="close"/>
                                </span>
                                <Form.Control type="text" />
                            </div>
                        </Form.Group>
                </Form>
                <div className='d-flex justify-content-end mt-3'>
                    <Button variant="light">CANCEL</Button>{' '}
                    <Button className='dark-btn'>CREATE PLANET</Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddCharactersForm
