import React from 'react'
import CharTab from './CharTab';
import {  Row } from 'react-bootstrap';
import CharCard from './CharCard';
import CharSideBar from './charSideBar';
import CharacterEdit from './CharacterEdit';


const Characters = () => {
    return (
        <div className='character'>
            <CharacterEdit/>
            <Row className='container-fluid'>
                <div className='col-md-8 left-section'>
                    <CharTab
                        name="Planets:All"
                    />
                    <CharCard
                        name="Planet Alpha"
                        desc="Pop: 235"
                    />
                </div>
                <div className='col-md-4 right-section'>
                    <CharSideBar/>
                </div>
            </Row>
        </div>
    )
}

export default Characters
