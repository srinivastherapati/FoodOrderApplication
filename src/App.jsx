import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout.jsx";
import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./Components/Store/CartContext.jsx";
import { UserProgressContextProvider } from "./Components/Store/UserProgressContext.jsx";
function App() {
  return (
   < UserProgressContextProvider>
     <CartContextProvider>
      <Header />
      <Meals />
      <Cart /> 
      <Checkout />
     </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
