import React, { useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout.jsx";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import Sidebar from "./Components/Sidebar";
import Review from "./Components/Review.jsx";
import { CartContextProvider } from "./Components/Store/CartContext.jsx";
import { UserProgressContextProvider } from "./Components/Store/UserProgressContext.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("food");

  const [user, setUser] = useState({
    isAdmin: false,
    name: "John Doe",
    email: "john@example.com",
  });

  const handleLogout = () => {
    console.log("User logged out");
    // Add logout functionality here
  };

  const mainContainerStyle = {
    display: "flex",
    height: "100vh",
  };

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <div style={mainContainerStyle}>
          <Sidebar
            isAdmin={user.isAdmin}
            userName={user.name}
            userEmail={user.email}
            onLogout={handleLogout}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <div style={{ marginLeft: "250px" }}>
            <Header />
            <Meals />
            {currentPage == "your-orders" && <CustomerOrders />}
            <Cart />
            <Checkout />
          </div>
        </div>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
