import React from 'react'
import { Container, Col, Row} from 'react-bootstrap';
import AddCharactersForm from './AddCharactersForm'

const CharacterEdit = () => {
    return (
        <div className='characterEdit'>
            <Container>
                <Row>
                    <Col>
                       <AddCharactersForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CharacterEdit
