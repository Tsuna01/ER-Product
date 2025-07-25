import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//component
// import Navbar from "./component/Navbar";


//Page
// import Contact from "./page/Contact";
// import Home from "./page/Home";
import Login from "./page/Login";
import DashboardPage from "./page/DashboardPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
