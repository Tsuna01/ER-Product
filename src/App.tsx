import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//component
import Navbar from "./component/Navbar";

//Page
import Contact from "./page/contact";

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
