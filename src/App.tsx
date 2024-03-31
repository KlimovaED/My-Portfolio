import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Progects} from "./layout/sections/progects/Progects";
import {Contatti} from "./layout/sections/contatti/Contatti";
import {Footer} from "./layout/footer/Footer";
import {About} from "./layout/sections/about/About";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Progects/>
            <Contatti/>
            <Footer/>
        </div>
    );
}

export default App;


