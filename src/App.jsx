import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarContainer } from "./components/Navbar/NavBarContainer";
import { Home } from "./pages/Home/Home";
import { Store } from "./pages/Store/Store";
import { ProductDetails } from "./components/Store/ProductDetails";
import { Cart } from "./pages/Cart/Cart";
import { FooterContainer } from "./components/Footer/FooterContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/:productID" element={<ProductDetails />} />
      </Routes>
      <FooterContainer />
    </BrowserRouter>
  );
}

export default App;
