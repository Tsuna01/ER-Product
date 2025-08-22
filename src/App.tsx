import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

//component
import StaffForm from "./component/StaffForm";
import WardForm from "./component/WardForm";
import EmployeeD from "./component/EmployeeD";
import EmployeeE from "./component/EmployeeE";
import EmployeeU from "./component/EmployeeU";
import Infostaff from "./component/Infostaff";
import Fromdrug from "./component/Fromdrug";


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
import Medication from "./page/Medication";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LayoutLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/Adminpanel" element={<AdminPanel />} />
          
          <Route path="/doctor/StaffForm" element={<StaffForm />} />
          <Route path="/doctor/WardForm" element={<WardForm />} />
          <Route path="/doctor/StaffForm/:id" element={<Infostaff />} />
          
          {/* Employee Routes */}
          <Route path="/employee/D" element={<EmployeeD />} />
          <Route path="/employee/E" element={<EmployeeE />} />
          <Route path="/employee/U" element={<EmployeeU />} />

          {/* From Drug */}
          <Route path="/medications/from" element={<Fromdrug />} />
        </Route>

        <Route element={<HomeLayout />}>
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/medications" element={<Medication />} />

        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App
