//import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//import components
import Siderbar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Siderbar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
