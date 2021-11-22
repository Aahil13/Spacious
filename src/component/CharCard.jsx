import React from 'react'
import { Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CharactersArray from './CharactersArray'
import CharSideBar from './charSideBar'
import CharImg1 from "./images/characters/character-1.png"
import CharImg2 from "./images/characters/character-2.png"
import CharImg3 from "./images/characters/character-7.png"
import CharImg4 from "./images/characters/character-8.png"
import CharImg5 from "./images/characters/character-9.png"
import CharImg6 from "./images/characters/character-10.png"
import CharImg7 from "./images/characters/character-11.png"
import CharImg8 from "./images/characters/character-12.png"
import CharImg9 from "./images/characters/character-16.png"
import CharImg10 from "./images/characters/character-15.png"
import CharImg11 from "./images/characters/character-14.png"
import CharImg12 from "./images/characters/character-5.png"
import CharBtn from './CharBtn'

function ShowSide(){
    document.getElementsByClassName("CharSideBar")[0].classList.toggle("show-side")
}

function displayName() {
    var cards = document.querySelectorAll('.char-box');
    cards.forEach(btnClicked);
  
}
function btnClicked(btn,index) {
    btn.addEventListener('click',()=>{
       document.getElementsByClassName("navbar-brand")[2].innerHTML = CharactersArray[index].name;
       document.getElementsByClassName("charName")[0].innerHTML = CharactersArray[index].fName
    });
}

const CharCard = (props) => {
    return (
        <div>
            <Row>
                <div>
                    <Row className='d-flex justify-content-evenly'>
                        <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="0" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg3} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[0].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                        </Card> 
                        <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="1" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg1} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[1].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="2" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg2} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[2].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                      
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="3" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg4} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[3].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card> 
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="4" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg12} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[4].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="5" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg8} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[5].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="6" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg5} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[6].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="7" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg7} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[7].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="8" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg9} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[8].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="9" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg10} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[9].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="10" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg11} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[10].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                    <Card onClick={() => {
                            ShowSide();
                            displayName();
                            }}
                           id="11" className='loading-img-box char-box col-12 col-sm-6 col-lg-4 mb-5 px-0 py-0'>
                        <Card.Img variant="top" src={CharImg6} alt="charimg" />
                        <Card.Body>
                        <Card.Text>
                            <h5 className='charhead'>{CharactersArray[11].name}</h5>
                            <p>{CharactersArray[0].friends}</p>
                        </Card.Text>
                        </Card.Body>
                        <CharBtn/>
                    </Card>   
                    </Row>
                </div>
            </Row>
        </div>
    )
}

export default CharCard
