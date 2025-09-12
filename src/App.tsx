import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import './App.css'
//component
import StaffForm from "./component/StaffForm";
import WardForm from "./component/WardForm";
import EmployeeD from "./component/EmployeeD";
import EmployeeE from "./component/EmployeeE";
import EmployeeU from "./component/EmployeeU";
import Infostaff from "./component/Infostaff";
import Fromdrug from "./component/Fromdrug";
import QualiForm from "./component/QualiForm";
import Workx from "./component/Workx";
import NumericInput from "./component/NumericInput";
import SupplierForm from "./component/SupplierForm";
import EmployeeW from "./component/EmployeeW";


//Layout
import LayoutLogin from "./layout/LayoutLogin";
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";

//Page
// import Home from "./page/Home";
import Login from "./page/Login";
import AdminPanel from "./page/AdminPanel";
import Doctor from "./page/Doctor";
import Employee from "./page/Employee";
import Medication from "./page/Medication";
import Suppliers from "./page/Suppliers";


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LayoutLogin />}>
          <Route path="/" element={<Navigate to="/auth/Login" replace />} />
          <Route path="/auth/Login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>

          <Route path="/doctor/StaffForm" element={<StaffForm />} />
          <Route path="/doctor/WardForm" element={<WardForm />} />
          <Route path="/doctor/QualiForm" element={<QualiForm />} />
          <Route path="/doctor/StaffInfo/:id" element={<Infostaff />} />
          <Route path="/doctor/Workx" element={<Workx />} />


          {/* Employee Routes */}
          <Route path="/employee/D" element={<EmployeeD />} />
          <Route path="/employee/E" element={<EmployeeE />} />
          <Route path="/employee/U" element={<EmployeeU />} />
          <Route path="/employee/W" element={<EmployeeW />} />

          {/* From Drug */}
          <Route path="/medications/from" element={<Fromdrug />} />


          <Route path="/supplier/NumericInput" element={<NumericInput />} />
          <Route path="/supplier/SupplierForm" element={<SupplierForm />} />

          </Route>


        <Route element={<HomeLayout />}>
          <Route path="/Adminpanel" element={<AdminPanel />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/medications" element={<Medication />} />
          <Route path="/supplier" element={<Suppliers/>}/>
          

        </Route>



      </Routes>
    </BrowserRouter>
  )
}

export default App
