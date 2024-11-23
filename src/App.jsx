import React, { useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import CustomerOrders from "./Components/CustomerOrders";
import Sidebar from "./Components/Sidebar";
import { CartContextProvider } from "./Components/Store/CartContext";
import { UserProgressContextProvider } from "./Components/Store/UserProgressContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <LoginPage setLoggedIn={setLoggedIn} />;
  }

  const mainContainerStyle = {
    display: "flex",
    height: "100vh",
  };

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <div style={mainContainerStyle}>
          <Sidebar onLogout={handleLogout} />
          <div style={{ marginLeft: "250px" }}>
            <Header />
            <CustomerOrders />
            <Cart />
            <Checkout />
          </div>
        </div>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;