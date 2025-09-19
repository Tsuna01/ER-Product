import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Medication() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/medications/api")
      .then(response => {
        console.log("✅ ได้ข้อมูล:", response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error("❌ เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ป่วย!", error);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md max-w-7xl rounded-lg p-6 w-full flex justify-between mx-auto mt-10">
        <h1 className="text-2xl font-bold">การจ่ายยา</h1>
        <div>
          <Link
            to="/medications/from"
            className="mr-10 bg-blue-400 rounded-xl p-2 text-white hover:bg-green-500"
          >
            ฟอร์มการจ่ายยา
          </Link>
        </div>
      </div>

      {/* Table */}
      <div className=" bg-white rounded-2xl shadow-md mx-auto mt-10 ring-1 ring-gray-200 p-6 w-[80%]">
      <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
            <th className="px-6 py-3 text-sm font-semibold">Patient ID</th>
            <th className="px-6 py-3 text-sm font-semibold">Patient Name</th>
            <th className="px-6 py-3 text-sm font-semibold">Drug Name</th>
            <th className="px-6 py-3 text-sm font-semibold">Units Per Day</th>
            <th className="px-6 py-3 text-sm font-semibold">Start Date</th>
            <th className="px-6 py-3 text-sm font-semibold">End Date</th>
            <th className="px-6 py-3 text-sm font-semibold">Prescribed By</th>
            <th className="px-6 py-3 text-sm font-semibold">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row: any, id) => (
            <tr key={id} className="hover:bg-gray-50 even:bg-gray-50/50 transition">
              <td className="px-6 py-3 text-gray-700">{row.patient_id}</td>
              <td className="px-6 py-3 text-gray-700">{row.name}</td>
              <td className="px-6 py-3 text-gray-700">{row.item_name}</td>
              <td className="px-6 py-3 text-gray-700">{row.units_per_day}</td>
              <td className="px-6 py-3 text-gray-700">{row.start_date}</td>
              <td className="px-6 py-3 text-gray-700">{row.end_date}</td>
              <td className="px-6 py-3 text-gray-700">{row.prescribed_by}</td>
              <td className="px-6 py-3 text-gray-700">
                <Link
                  to={`/medications/info/${row.medication_id}`}
                  className="text-white bg-green-500 m-auto justify-center flex rounded-lg hover:bg-red-600 hover:text-blue-800"
                >
                  เพิ่มเติม
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Medication;
