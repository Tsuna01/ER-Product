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
    <div className="bg-white shadow-xl shadow-gray-400 rounded-xl ml-24 p-10">
      <h1 className="text-xl text-gray-400 my-[10px]">ตารางผู้ป่วยนอก</h1>
      <table className="table-auto mt-10 border border-gray-300 w-full rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Patient ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">purpose</th>
            <th className="border border-gray-300 px-4 py-2">Clinic No</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info: any, id: number) => (
            <tr key={id}>
              <td className="border border-gray-300 px-4 py-2">{info.patient_id}</td>
              <td className="border border-gray-300 px-4 py-2">{info.name}</td>
              <td className="border border-gray-300 px-4 py-2">{info.purpose}</td>
              <td className="border border-gray-300 px-4 py-2">{info.clinic_no}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  to={`/employee/details/${info.patient_id}`}
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
