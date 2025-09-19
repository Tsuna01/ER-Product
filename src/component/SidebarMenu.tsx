import {
  Home,
  LogOut,
  Menu,
  Pill,
  SquarePlus,
  Stethoscope,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/axios";
import { useAuth } from "../auth/AuthContext";

const menuItems = [
  { name: "แดชบอร์ด", icon: Home, url: "/admin" },
  { name: "ข้อมูลผู้ป่วย", icon: User, url: "/employee" },
  { name: "ข้อมูลหมอ", icon: Stethoscope, url: "/doctor" },
  { name: "ใบเบิก", icon: SquarePlus, url: "/supplier" },
  { name: "การจ่ายยา", icon: Pill, url: "/medications" },
];

export default function SidebarMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
  try {
    setLoggingOut(true);
    await logout();                       // เคลียร์ฝั่งเซิร์ฟเวอร์ + state
    localStorage.removeItem("token");     // ลบ token ที่อาจเคยเก็บไว้
    localStorage.removeItem("remember_username");
    delete api.defaults.headers.common.Authorization; // ลบ header ออกให้ชัวร์
    navigate("/auth/login", { replace: true });
  } finally {
    setLoggingOut(false);
  }
};

  return (
    <div
      className={`bg-white border-2 border-gray-200 z-30 shadow-md transition-all fixed rounded-xl duration-300 ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && <h2 className="font-bold text-lg">Hospital</h2>}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex flex-col gap-1 p-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.url}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-100"
          >
            <item.icon className="w-5 h-5 text-blue-600" />
            {isSidebarOpen && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t mt-auto">
        <button
          onClick={onLogout}
          disabled={loggingOut}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 cursor-pointer disabled:opacity-60"
        >
          <LogOut className="w-5 h-5" />
          {isSidebarOpen && <span>{loggingOut ? "กำลังออก..." : "ออกจากระบบ"}</span>}
        </button>
      </div>
    </div>
  );
}
