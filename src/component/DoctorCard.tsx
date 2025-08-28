import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
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
    <div className="border p-4 rounded-lg shadow-xl shadow-gray-400 bg-white h-auto w-full md:w-auto">
        <table className="table-auto mx-70 mt-5 border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">position</th>
            <th className="border border-gray-300 px-4 py-2">department</th>
            <th className="border border-gray-300 px-4 py-2">Medication</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info) => (
            <tr key={info.id}>
              <td className="border border-gray-300 px-4 py-2">{info.name}</td>
              <td className="border border-gray-300 px-4 py-2">{info.position}</td>
              <td className="border border-gray-300 px-4 py-2">{info.department}</td>
              <td className="border border-gray-300 px-4 py-2"><Link to={"/doctor/StaffInfo/" + info.id } className='text-black bg-green-500 p-[5px] rounded-lg hover:bg-red-600 hover:text-blue-800'>รายละเอียด</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DoctorCard