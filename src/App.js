import Navbar from "./components/navbar";
import Top from "./components/Top";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Setting from "./Setting";
import Itemdetails from "./components/itemDetails";
import Notfound from "./components/notfound";
import Cart from "./components/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/itemDetails/:id" element={<Itemdetails />}></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Notfound />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
