import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap';
import Close from "./images/assets/icon-close.png"
import Navigation from './Navbar';

const formRemove = () =>{
    document.getElementsByClassName("PlanetFormEdit")[0].classList.remove("PlanetForm");
}

const MyForm = () => {
    return (
        <div className='d-flex justify-content-center'>
             <div className=" loading-img-box w-50">
                <div className='d-flex justify-content-end'>
                    <Button variant="light" className='close' onClick={formRemove}><img src={Close} alt="close" /></Button>
                </div>
                <Navigation
                    title="Planet"
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
                </Form>
                <div className='d-flex justify-content-end'>
                    <Button variant="light">CANCEL</Button>{' '}
                    <Button className='dark-btn'>CREATE PLANET</Button>
                </div>
            </div>
        </div>
    )
}

export default MyForm
