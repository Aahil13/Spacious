import React from 'react'
import CharTab from './CharTab';
import CharCard from './CharCard';
import CharSideBar from './charSideBar';
import CharacterEdit from './CharacterEdit';


const Characters = () => {
    return (
        <div>
            <CharacterEdit/>
            <div className='character container'>
                <CharTab
                    name="Planets:All"
                />
                <CharCard
                    name="Planet Alpha"
                    desc="Pop: 235"
                />
            </div>
            <CharSideBar/>
        </div>
        
    )
}

export default Characters
