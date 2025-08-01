import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//component
import StaffForm from "./component/StaffForm";
import WardForm from "./component/WardForm";
import EmployeeD from "./component/EmployeeD";
import EmployeeE from "./component/EmployeeE";
import EmployeeU from "./component/EmployeeU";


//Layout
import LayoutLogin from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";




//Page
// import Home from "./page/Home";
import Login from "./page/Login";
import AdminPanel from "./page/AdminPanel";
import Doctor from "./page/Doctor";
import Employee from "./page/Employee";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LayoutLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/Adminpanel" element={<AdminPanel />} />
          
          <Route path="/DT/StaffForm" element={<StaffForm />} />
          <Route path="/DT/WardForm" element={<WardForm />} />
          <Route path="/EMP/D" element={<EmployeeD />} />
          <Route path="/EMP/E" element={<EmployeeE />} />
          <Route path="/EMP/U" element={<EmployeeU />} />
        </Route>

        <Route element={<HomeLayout />}>
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/employee" element={<Employee />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
