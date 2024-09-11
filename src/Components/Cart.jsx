import { createContext, useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./Store/CartContext";
import Buttons from "./UI/Buttons";
import UserProgressContext from "./Store/UserProgressContext";

export default function Cart(){
   const crtCntxt= useContext(CartContext);

   const cartTotal=crtCntxt.items.reduce((totalPrice,item)=>{
    return totalPrice+item.quantity * item.price
   },0)

   const userProgressctxt=useContext(UserProgressContext);

   function handleHideCart(){
    userProgressctxt.hideCart();
   }

    return <Modal className="cart" open={userProgressctxt.progress==='cart'}>
        <h2>Your Cart</h2>
      <ul>
    {crtCntxt.items.map((item)=>{
       return <li key={item.id}>{item.name} -{item.quantity}</li>
    })}
        </ul>
<p className="cart-total">${cartTotal}</p>
<p className="modal-actions">
    <Buttons textOnly  onClick={handleHideCart} >Close</Buttons>
    <Buttons >Go to Checkout</Buttons>
</p>
    </Modal>
}