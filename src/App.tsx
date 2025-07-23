import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//component
// import Navbar from "./component/Navbar";


//Page
import Contact from "./page/Contact";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
