import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.div`
background-color: black;
height: 3000px`;
