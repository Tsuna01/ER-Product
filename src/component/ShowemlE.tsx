import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowemlE() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employee/E/api')
      .then(response => {
        console.log("📦 ได้ข้อมูล:", response.data); 
        setData(response.data);
      })

      .catch(error => {
        console.error('There was an error fetching the doctor data!', error);
      });
  }, []);

  console.log(data);

  return (
    <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6">
      <h1 className="font-bold mb-5 text-xl text-cyan-700">ตารางผู้ป่วยนอก</h1>
      <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
            <th className="px-6 py-3 text-sm font-semibold">Patient ID</th>
            <th className="px-6 py-3 text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-sm font-semibold">purpose</th>
            <th className="px-6 py-3 text-sm font-semibold">Clinic No</th>
            <th className="px-6 py-3 text-sm font-semibold">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((info: any, id: number) => (
            <tr key={id}>
              <td className="px-6 py-3 text-gray-700">{info.patient_id}</td>
              <td className="px-6 py-3 text-gray-700">{info.name}</td>
              <td className="px-6 py-3 text-gray-700">{info.purpose}</td>
              <td className="px-6 py-3 text-gray-700">{info.clinic_no}</td>
              <td className="px-6 py-3 text-gray-700">
                <Link
                  to={`/employee/Infopatient/${info.patient_id}`}
                  className="text-black bg-green-500 p-[5px] rounded-lg hover:bg-red-600 hover:text-blue-800"
                >
                  รายละเอียด
                </Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowemlE;
