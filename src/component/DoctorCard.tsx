import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"
function DoctorCard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/doctor/api')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctor data!', error);
      });
  }, []);

  console.log(data)
  return (
      <table className="table-auto mt-5 w-full border bg-white border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">staff id</th>
            <th className="border border-gray-300 px-4 py-2">name</th>
            <th className="border border-gray-300 px-4 py-2">position</th>
            <th className="border border-gray-300 px-4 py-2">Medication</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, id) => (
            <tr key={id}>
              <td className="border border-gray-300 px-4 py-2">{info.staff_id}</td>
              <td className="border border-gray-300 px-4 py-2">{info.name}</td>
              <td className="border border-gray-300 px-4 py-2">{info.position}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                to={`/doctor/StaffInfo/${info.staff_id}`}
                className="text-black bg-green-500 p-[5px] rounded-lg hover:bg-red-600 hover:text-blue-800"
              >
                รายละเอียด
              </Link></td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default DoctorCard