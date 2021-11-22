import React from "react"
import { Col, Row} from 'react-bootstrap';
import Buttons from "./Button";
import {ReactComponent as Planetimg1} from './images/planets/planet-1.svg' ;
import {ReactComponent as Planetimg2} from './images/planets/planet-2.svg' ;
import {ReactComponent as Planetimg3} from './images/planets/planet-3.svg' ;
import {ReactComponent as Planetimg4} from './images/planets/planet-4.svg' ;
import {ReactComponent as Planetimg5} from './images/planets/planet-5.svg' ;
import {ReactComponent as Planetimg6} from './images/planets/planet-6.svg' ;
import {ReactComponent as Planetimg7} from './images/planets/planet-7.svg' ;
import {ReactComponent as Planetimg8} from './images/planets/planet-8.svg' ;
import {ReactComponent as Planetimg9} from './images/planets/planet-9.svg' ;

function ShowSide(){
    document.getElementsByClassName("side-bar")[0].classList.toggle("show-side")
}

function PCard(props){
    return(
        <div>
            <Row>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg1/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg8/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg2/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg3/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg4/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg5/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg6/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg7/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg8/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg9/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg1/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                    </div>
                </Col>
                <Col sm>
                    <div className='loading-img-box mb-5 planet-card' onClick={ShowSide}>
                        <div className='text-center'>
                            <Planetimg2/>
                        </div>
                        <h4 ClassName="planet-text-head">{props.name}</h4>
                        <p>{props.desc}</p>
                        <Buttons/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}



export default PCard