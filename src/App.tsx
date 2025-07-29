import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//component
import StaffForm from "./component/StaffForm";
import WardForm from "./component/WardForm";
import EmployeeD from "./component/EmployeeD";


//Layout
import LayoutLogin from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";



//Page
// import Home from "./page/Home";
import Login from "./page/Login";
import AdminPanel from "./page/AdminPanel";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LayoutLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="/DT/StaffForm" element={<StaffForm />} />
          <Route path="/DT/WardForm" element={<WardForm />} />
          <Route path="/EMP/D" element={<EmployeeD />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
