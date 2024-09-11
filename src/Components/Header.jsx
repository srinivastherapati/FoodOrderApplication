import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Buttons from './UI/Buttons'
import CartContext from './Store/CartContext.jsx'
import UserProgressContext from './Store/UserProgressContext.jsx';
export default function Header(){

   const crtCntxt= useContext(CartContext);

   const cartValue=crtCntxt.items.reduce((totalItems,item)=>{
    return totalItems+ item.quantity;
   },0);


   const userProgressCtx= useContext(UserProgressContext);
   function handleShowCart(){
    userProgressCtx.showCart();
   }
    return( <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="Restraunt Image" />
            <h1>Paradise</h1>
        </div>
        <nav>
           <Buttons onClick={handleShowCart} > Cart ({cartValue})</Buttons>
        </nav>
    </header>
    )
}