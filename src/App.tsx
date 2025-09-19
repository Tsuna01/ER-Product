import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import "./App.css";

// Auth wrappers
import AuthProvider from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import RoleRoute from "./auth/RoleRoute"; // <-- ควรรองรับ props: roles: string[]

// Components (feature pages)
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
import Infopatient from "./component/Infopatient";
import Infomedication from "./component/Infomedication";

// Layouts
import LayoutLogin from "./layout/LayoutLogin";
import MainLayout from "./layout/MainLayout";
import HomeLayout from "./layout/HomeLayout";

// Top-level pages
import Login from "./page/Login";
import AdminPanel from "./page/AdminPanel";
import Doctor from "./page/Doctor";
import Employee from "./page/Employee";
import Medication from "./page/Medication";
import Suppliers from "./page/Suppliers";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutLogin />}>
            <Route path="/" element={<Navigate to="/auth/login" replace />} />
            <Route path="/auth/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route
              path="/doctor/staffform"
              element={<RoleRoute roles={["admin","per"]}><StaffForm /></RoleRoute>}
            />
            <Route
              path="/doctor/wardform"
              element={<RoleRoute roles={["admin","per","charge"]}><WardForm /></RoleRoute>}
            />
            <Route
              path="/doctor/qualiform"
              element={<RoleRoute roles={["admin","per"]}><QualiForm /></RoleRoute>}
            />

            <Route path="/doctor/staffinfo/:id" element={<RoleRoute roles={["admin","per"]}><Infostaff /></RoleRoute>} />
            <Route path="/doctor/workx" element={<RoleRoute roles={["admin","per"]}><Workx /></RoleRoute>} />
            <Route path="/employee/d" element={<EmployeeD />} />
            <Route path="/employee/e" element={<RoleRoute roles={["admin","charge","medical"]}><EmployeeE /></RoleRoute>} />
            <Route path="/employee/u" element={<EmployeeU />} />
            <Route path="/employee/w" element={<RoleRoute roles={["admin","charge","medical"]}><EmployeeW /></RoleRoute>} />
            <Route path="/employee/infopatient/:id" element={<RoleRoute roles={["admin","charge","medical"]}><Infopatient /></RoleRoute>} />
            <Route path="/medications/from" element={<RoleRoute roles={["admin","charge"]}><Fromdrug /></RoleRoute>} />
            <Route path="/medications/info/:id" element={<RoleRoute roles={["admin","charge"]}><Infomedication /></RoleRoute>} />
            <Route path="/supplier/numericinput" element={<RoleRoute roles={["admin","charge","medical"]}><NumericInput /></RoleRoute>} />
            <Route path="/supplier/supplierform" element={<RoleRoute roles={["admin","medical"]}><SupplierForm /></RoleRoute>} />
          </Route>

          <Route element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
            <Route
              path="/admin"
              element={<AdminPanel />}
            />
            <Route
              path="/doctor"
              element={<Doctor />}
            />
            <Route
              path="/employee"
              element={<Employee />}
            />
            <Route path="/medications" element={<RoleRoute roles={["admin","charge","medical"]}><Medication /></RoleRoute>} />
            <Route path="/supplier" element={<RoleRoute roles={["admin","charge","medical"]}><Suppliers /></RoleRoute>} />
          </Route>

          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
