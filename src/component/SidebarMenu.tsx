import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  User,
  Stethoscope,
  ArrowRightLeft,
  Pill,
  DollarSign,
  LogOut,
  Menu,
} from 'lucide-react'

const menuItems = [
  { name: 'แดชบอร์ด', icon: Home , url : '/AdminPanel'},
  { name: 'ข้อมูลผู้ป่วย', icon: User , url : '#'},
  { name: 'ข้อมูลหมอ', icon: Stethoscope , url : '#'},
  { name: 'การเข้า/ออก', icon: ArrowRightLeft , url : '#'},
  { name: 'การจ่ายยา', icon: Pill , url : '#' },
  { name: 'การเงิน', icon: DollarSign , url : '#' },
]

export default function SidebarMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className={`bg-white border-2 border-gray-200 shadow-md transition-all fixed rounded-xl duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex items-center justify-between p-4">
        {isSidebarOpen && <h2 className="font-bold text-lg">Hospital</h2>}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex flex-col gap-1 p-2">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.url} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-100">
            <item.icon className="w-5 h-5 text-blue-600" />
            {isSidebarOpen && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t mt-auto">
        <a href="#" className="flex items-center gap-2 text-red-600 hover:text-red-800">
          <LogOut className="w-5 h-5" />
          {isSidebarOpen && <span>ออกจากระบบ</span>}
        </a>
      </div>
    </div>
  )
}
