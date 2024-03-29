import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Progects} from "./layout/sections/progects/Progects";


function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Skills/>
            <Progects/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
background-color: black;
height: 3000px`;
