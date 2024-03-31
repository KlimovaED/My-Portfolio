import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Progects} from "./layout/sections/progects/Progects";
import {Contatti} from "./layout/sections/contatti/Contatti";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Progects/>
            <Contatti/>
            <Footer/>
        </div>
    );
}

export default App;


