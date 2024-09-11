import Cart from "./Components/Cart";
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
     </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
