import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
