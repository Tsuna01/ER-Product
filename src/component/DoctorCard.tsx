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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const name = (fd.get('name') as string) || '';
  const position = (fd.get('position') as string) || '';
  const exp = (fd.get('exp') as string) || '';
  const qual_type = (fd.get('qual_type') as string) || '';

  try {
    const res = await axios.get('http://localhost:3000/doctor/api', {
      params: {
        name: name || undefined,
        position: position || undefined,
        exp: exp || undefined,
        qual_type: qual_type || undefined,
        page: 1,
        limit: 50,
      },
    });
    setData(res.data);        
  } catch (err) {
    console.error('❌ Error:', err);
    alert('เกิดข้อผิดพลาดในการค้นหา');
  }
};

  console.log(data)
  return (

    <div className="">
      <div className="my-5 bg-white flex justify-between  w-auto">
        <div className="">
          <h1 className="items-center text-2xl ml-10  font-bold text-cyan-800">ค้นหาบุคลากร</h1>
        </div>
        <div className="items-center">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
            <div className="flex justify-between">
              <label htmlFor="" >ชื่อแพทย์ </label>
              <input name="name" type="text" className="input mx-4 w-55" />
              <label htmlFor="" >ตำแหน่ง </label>
              <select name="position" id="" className="input mx-4 w-55">
                <option value="">---------</option>
                <option value="HR_Officer">HR Officer</option>
                <option value="HR_Manager">HR Manager</option>
                <option value="Doctor_General">Doctor General</option>
                <option value="Doctor_Specialist">Doctor Specialist</option>
                <option value="Surgeon">Surgeon</option>
                <option value="Resident">Resident</option>
                <option value="Nurse_Staff">Nurse Staff</option>
                <option value="Nurse_Charge">Nurse Charge</option>
                <option value="Nurse_Assistant">Nurse Assistant</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Supply_Officer">Supply Officer</option>
                <option value="Medical_Director">Medical Director</option>
                <option value="Hospital_Director">Hospital Director</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label htmlFor="" >ประสบการณ์ </label>
              <select name="exp" id="" className="input mx-4 w-55">
                <option value="">-------</option>
                <option value="1">1 ปี</option>
                <option value="2">2 ปี</option>
                <option value="3">3 ปี</option>
                <option value="4">4 ปี</option>
                <option value="5_more">5 ปีขึ้นไป</option>
              </select>

              <label htmlFor="" >วุฒิการศึกษา </label>
              <select name="qual_type" id="" className="input mx-4 w-55">
                <option value="">เลือก</option>
                <option value="vocational">ปวส.</option>
                <option value="bachelor">ปริญญาตรี</option>
                <option value="master">ปริญญาโท</option>
                <option value="doctorate">ปริญญาเอก</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
            <th className="px-6 py-3 text-sm font-semibold">staff id</th>
            <th className="px-6 py-3 text-sm font-semibold">name</th>
            <th className="px-6 py-3 text-sm font-semibold">position</th>
            <th className="px-6 py-3 text-sm font-semibold">Medication</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((info, id) => (
            <tr key={id} className="hover:bg-gray-50 even:bg-gray-50/50 transition">
              <td className="px-6 py-3 text-gray-700">{info.staff_id}</td>
              <td className="px-6 py-3 text-gray-700">{info.name}</td>
              <td className="px-6 py-3 text-gray-700">{info.position}</td>
              <td className="px-6 py-3 text-gray-700">
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
    </div>
  )
}

export default DoctorCard