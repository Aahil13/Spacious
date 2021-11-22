import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FirstImg from "./images/characters/character-16.png"
import SecondImg from "./images/characters/character-13.png"
import ThirdImg from "./images/characters/character-3.png"
import FourthImg from "./images/characters/character-5.png"
import FifthImg from "./images/characters/character-4.png"
import SixthImg from "./images/characters/character-6.png"
import SeventhImg from "./images/characters/character-4.png"
import EightImg from "./images/characters/character-2.png"

function CharacterBox(props){
    return(
        <div>
            <button type="button" class="btn mb-3 py-0 btn-sm d-flex align-items-center border border-light">
                <img src={props.img} alt="character" className="character-img"/><span class="badge">
                    <div class="contain">
                        <h5>{props.name}</h5>
                        <p className='mb-0'>Amet minim mollit non deserunt.</p>
                    </div>
                </span>
            </button>
        </div>
    )
}

const SideBarCharacters = () => {
    return (
        <div>
            <CharacterBox
                img={FirstImg}
                name="Eleanor Pena"
            />
            <CharacterBox
                img={SecondImg}
                name="Brooklyn Simmons"
            />
            <CharacterBox
                img={ThirdImg}
                name="Kristin Watson"
            />
            <CharacterBox
                img={FourthImg}
                name="Cody Fisher"
            />
            <CharacterBox
                img={FifthImg}
                name="Courtney Henry"
            />
            <CharacterBox
                img={SixthImg}
                name="Jenny Wilson"
            />
            <CharacterBox
                img={SeventhImg}
                name="Annette Black"
            />
            <CharacterBox
                img={EightImg}
                name="Robert Fox"
            />
        </div>
    )
}

export default SideBarCharacters
