import React from 'react';
import Tabs from './Tabs';
import PCard from './PCard';
import PlanetsEdit from "./PlanetsEdit";
import { Container} from 'react-bootstrap';
import SideBar from './SideBar';
import CharacterEdit from './CharacterEdit';

const Planets = () => {
    return (
        <div>
            <PlanetsEdit/>
            <CharacterEdit/>
            <Container>
                <Tabs/>
                <PCard
                    name="Planet Alpha"
                    desc="Pop: 235"
                />
            </Container>
            <SideBar/>
        </div>
    )
}

export default Planets;
