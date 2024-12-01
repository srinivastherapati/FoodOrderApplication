import { useContext, useState } from "react";
import Modal from "./UI/Modal";
import CartContext from "./Store/CartContext";
import Buttons from "./UI/Buttons";
import Input from "./UI/Input";
import UserProgressContext from "./Store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const crtCntxt = useContext(CartContext);

  const userPrgrs = useContext(UserProgressContext);

  const userId = JSON.parse(localStorage.getItem("userDetails")).userId;

  const { response, isLoading, error, sendRequest, clearData } = useHttp(
    `http://localhost:8080/api/orders/place/${userId}`,
    requestConfig
  );

  if (isLoading) {
    return <p>submitting the order</p>;
  }

  const cartTotal = crtCntxt.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  function handleHideCheckout() {
    userPrgrs.hideCheckout();
  }

  function handleFinish() {
    userPrgrs.hideCheckout();
    crtCntxt.clearCart();
    clearData();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items: crtCntxt.items,
          customer: customerData,
        },
      })
    );
  }
  let actions = (
    <>
      <Buttons type="button" textOnly onClick={handleHideCheckout}>
        Close
      </Buttons>
      <Buttons>Place Order</Buttons>
    </>
  );

  if (isLoading) {
    actions = <span>Placing your order</span>;
  }

  if (response && !error) {
    return (
      <Modal open={userPrgrs.progress === "checkout"}>
        <h2>Success!</h2>
        <p>Your Order Placed Successfully</p>
        <p>We will get back to you with more details via email</p>
        <p className="modal-actions">
          <Buttons onClick={handleFinish}>Okay</Buttons>
        </p>
      </Modal>
    );
  }
  // else if (error) {
  //   alert("Something went wrong ! Please try again ");
  //   // window.location.reload();
  //   // userPrgrs.hideCart();
  // }

  return (
    <Modal open={userPrgrs.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total-Amount:{Math.round(cartTotal * 100) / 100}</p>
        <Input id="name" type="text" label="Full Name" />
        <Input id="email" type="email" label="Email" />
        <Input id="street" type="text" label="Street" />
        <div className="control-row">
          <Input id="city" type="text" label="City" />
          <Input id="postal-code" type="text" label="Postal Code" />
        </div>
        <p>Card Deatils</p>
        <Input id="Card Number" type="text" label="card Number"></Input>
        <Input id="Name on Card" type="text" label="Name On Card"></Input>
        <Input id="CVV" type="text" label="CVV"></Input>
        <Input id="expiry" type="text" label="expiry"></Input>
        {/* {error && <ErrorPage title="failed to place order" message={error} />} */}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
