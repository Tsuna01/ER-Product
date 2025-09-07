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
          <input
            type="text"
            className="input border rounded-lg px-3 py-2"
            placeholder="ค้นหา"
          />
        </div>
      </div>

      {/* Table */}
      <div className=" bg-white py-5 mt-10 mx-10  shadow-2xl rounded-4xl">
      <table className="table-auto shadow-2xl mx-auto m-10 border border-gray-300 w-[90%]">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-4 py-2">Patient ID</th>
            <th className="border px-4 py-2">Patient Name</th>
            <th className="border px-4 py-2">Drug Name</th>
            <th className="border px-4 py-2">Units Per Day</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">End Date</th>
            <th className="border px-4 py-2">Prescribed By</th>
            <th className="border px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, id) => (
            <tr key={id}>
              <td className="border px-4 py-2">{row.patient_id}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.item_name}</td>
              <td className="border px-4 py-2">{row.units_per_day}</td>
              <td className="border px-4 py-2">{row.start_date}</td>
              <td className="border px-4 py-2">{row.end_date}</td>
              <td className="border px-4 py-2">{row.prescribed_by}</td>
              <td className="border">
                <Link
                  to={`/medications/${row.medication_id}`}
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
