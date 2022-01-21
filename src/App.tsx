import Modal from "react-modal";
import CartProvider from "./context/CartContext";
import { Rotas } from "./Routes";
import { GlobalStyled } from "./styles/global";

Modal.setAppElement('#root')

function App() {
  return (
    <CartProvider>
        <GlobalStyled/>
        <Rotas/>
    </CartProvider>
  );
}

export default App;
