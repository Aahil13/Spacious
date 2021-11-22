import React from 'react'
// import { Row, Col } from 'react-bootstrap'
import FirstImg from "./images/characters/character-16.png"
import SecondImg from "./images/characters/character-13.png"
import ThirdImg from "./images/characters/character-3.png"
import FourthImg from "./images/characters/character-5.png"
import FifthImg from "./images/characters/character-4.png"
import SixthImg from "./images/characters/character-6.png"

function CharacterBox(props){
    return(
        <div>
            <button type="button" class="btn mb-3 py-0 btn-sm d-flex align-items-center border border-light">
                <img src={props.img} alt="character" className="character-img"/><span class="badge">
                    <div class="contain">
                        <h5>{props.name}</h5>
                        <p className='mb-0'>23 friends</p>
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
                name="Darlene Robertson"
            />
            <CharacterBox
                img={SecondImg}
                name="Kathryn Murphy"
            />
            <CharacterBox
                img={ThirdImg}
                name="Jenny Wilson"
            />
            <CharacterBox
                img={FourthImg}
                name="Arlene McCoy"
            />
            <CharacterBox
                img={FifthImg}
                name="Darrell Steward"
            />
            <CharacterBox
                img={SixthImg}
                name="Bessie Cooper"
            />
        </div>
    )
}

export default SideBarCharacters
