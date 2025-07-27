
export default function AdminPanel() {
  return (
    <div className="flex h-screen ml-[40px]">
      <div className="flex-1 flex flex-col">
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

function Card({ title, value, color }: { title: string; value: string; color: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-gray-700">{title}</h2>
      <p className={`text-2xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  )
}
