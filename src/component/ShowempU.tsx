import { useState, useEffect } from "react"
import axios from "axios"
function ShowempU() {
  const [data, setData] = useState([]);
  useEffect(() => {
  axios.get('http://localhost:3000/employee/U/api')
    .then(response => {
      console.log('✅ ได้ข้อมูล:', response.data); // ← ใช้อันนี้
      setData(response.data);
    })
    .catch(error => {
      console.error('❌ เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ป่วย!', error);
    });
}, []);
  return (
    <div className="ml-[80px] bg-white shadow-xl shadow-gray-400 absolute mt-[30px] w-[1000px] rounded-2xl h-auto p-8">
      <h1 className="text-xl text-gray-400 my-[10px]">เลือกหอผู้ป่วย</h1>
      <select name="" className="input mb-10" id="">
        <option value="#">ทั้งหมด</option>
        <option value="#">A1</option>
        <option value="#">A2</option>
        <option value="#">B1</option>
        <option value="#">B2</option>
      </select><br />
      <h1 className="bold mb-5 text-lg text-gray-400 ">ตารางผู้ป่วยที่อยู่ในวอร์ด</h1>
      <table className="table-auto w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Patient No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Data Placed</th>
            <th className="border border-gray-300 px-4 py-2">Expected Leave</th>
            <th className="border border-gray-300 px-4 py-2">Bed No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, id) => (
            <tr key={id}>
              <td className="border border-gray-300 px-4 py-2">{info.patient_id}</td>
              <td className="border border-gray-300 px-4 py-2">{info.name}</td>
              <td className="border border-gray-300 px-4 py-2">{info.date_admitted}</td>
              <td className="border border-gray-300 px-4 py-2">{info.expected_dis_date}</td>
              <td className="border border-gray-300 px-4 py-2">{info.bed_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowempU
