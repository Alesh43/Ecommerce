import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Pricing/Pricing";
import ProductPage from "./Pages/Products/Products";
import SingleProduct from "./Pages/Products/product-detail";
import Post from "./component/Blog/post";
import SinglePost from "./Pages/Posts/post-detail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path="/Products/:id" element={<SingleProduct/>} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Post" element={<Post/>} />
        
        <Route path="/Post/:id" element={<SinglePost/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
