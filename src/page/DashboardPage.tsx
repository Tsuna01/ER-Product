import { useState } from 'react'
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

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const menuItems = [
    { name: 'แดชบอร์ด', icon: Home },
    { name: 'ข้อมูลผู้ป่วย', icon: User },
    { name: 'ข้อมูลหมอ', icon: Stethoscope },
    { name: 'การเข้า/ออก', icon: ArrowRightLeft },
    { name: 'การจ่ายยา', icon: Pill },
    { name: 'การเงิน', icon: DollarSign },
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white border-2 border-gray-200 shadow-md transition-all rounded-xl duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex items-center justify-between p-4">
          {isSidebarOpen && <h2 className="font-bold text-lg">Hospital</h2>}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-2">
          {menuItems.map((item) => (
            <a key={item.name} href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-100">
              <item.icon className="w-5 h-5 text-blue-600" />
              {isSidebarOpen && <span>{item.name}</span>}
            </a>
          ))}
        </nav>
        <div className="p-4 border-t mt-auto">
          <a href="#" className="flex items-center gap-2 text-red-600 hover:text-red-800">
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span>ออกจากระบบ</span>}
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">ระบบจัดการโรงพยาบาล</h1>
          <p className="text-sm text-gray-500">ผู้ดูแลระบบ</p>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card title="จำนวนผู้ป่วย" value="145" color="text-blue-600" />
            <Card title="หมอประจำการ" value="18" color="text-green-600" />
            <Card title="รายได้เดือนนี้" value="฿85,000" color="text-emerald-600" />
          </div>
        </main>
      </div>
    </div>
  )
}

// Card component (ภายในไฟล์เดียวกัน)
function Card({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-gray-700">{title}</h2>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  )
}
