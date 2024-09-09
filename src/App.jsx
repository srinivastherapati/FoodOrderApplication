import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./Components/Store/CartContext";
function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
