import logoImg from '../assets/logo.jpg'
import Buttons from './UI/Buttons'
export default function Header(){
    return( <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="Restraunt Image" />
            <h1>Paradise</h1>
        </div>
        <nav>
           <Buttons> Cart (0)</Buttons>
        </nav>
    </header>
    )
}