import React from 'react'
import { Container, Col, Row} from 'react-bootstrap';
import MyForm from "./Form"

const PlanetsEdit = () => {
    return (
        <div className='PlanetFormEdit'>
            <Container>
                <Row>
                    <Col>
                       <MyForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PlanetsEdit
