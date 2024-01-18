import Navbar from "./navbar";
import Top from "./Top";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Setting from "./Setting";
import Cyc from "./Cyc";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Setting" element={<Setting />}></Route>
          <Route path="/Cyc" element={<Cyc />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
