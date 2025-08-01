import { Link } from "react-router-dom"
function DoctorCard() {
  return (
    <div className="border p-4 rounded-lg shadow-xl shadow-gray-400 bg-white h-auto w-60">
        <img 
        src=""
        alt=""
        className="border-2 w-50 h-25 rounded-lg" />
        <h2 className="text-xl font-semibold mt-2">ดร.เค ตังอยู่ไหน</h2>
        <p className="text-gray-600">ตำแหน่ง: แพทย์ผู้เชี่ยวชาญ</p>
        <p className="text-gray-600 mb-10">แผนก: จิตเวช</p>
        <Link to="#" className="ml-13 text-gray-800 p-2 shadow-md shadow-gray-400 rounded-lg cursor-pointer bg-blue-400 hover:bg-red-400"
        >ดูลายละเอียด</Link>
        
    </div>
  )
}

export default DoctorCard
