import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeE() {
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(fd.entries());

    try {
      const payload = {
        appointment: {
          patient_id: formObject.patient_id,
          staff_id: formObject.staff_id,
          appt_datetime: formObject.appt_datetime,
          room_id: formObject.room_id,
          purpose: formObject.purpose,
          status: formObject.status, // ใช้ค่าจาก select
        },
      };

      await axios.post("http://localhost:3000/employee/E", payload);

      alert("✅ บันทึกข้อมูลสำเร็จ");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ บันทึกข้อมูลล้มเหลว");
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3000/employee/E/info')
      .then(response => {
        console.log("📦 ได้ข้อมูล:", response.data);
        setData(response.data);
      })

      .catch(error => {
        console.error('There was an error fetching the doctor data!', error);
      });
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b mx-auto my-auto from-cyan-50 via-white to-cyan-50 py-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto border-l-8 border-cyan-500 pl-4 mb-8"
      >
        <h1 className="text-3xl md:text-4xl text-cyan-800 mt-5 font-bold">
          แบบฟอร์มการนัดหมายผู้ป่วย
        </h1>
      </motion.div>

      {/* Form Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Appointment Info */}
          <div>
            <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
              <User2 className="h-5 w-5" /> ข้อมูลการนัดหมาย
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                className="input"
                placeholder="Staff ID"
                name="staff_id"
                required
              />
              <input
                type="text"
                className="input"
                placeholder="Patient ID"
                name="patient_id"
                required
              />
              <input
                type="text"
                className="input md:col-span-2"
                placeholder="Examination Room"
                name="room_id"
                required
              />
              <input
                type="text"
                className="input"
                placeholder="Purpose"
                name="purpose"
                required
              />
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">
                  วันที่นัดตรวจ
                </label>
                <input
                  type="datetime-local"
                  className="input"
                  name="appt_datetime"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 ">
              <label className="text-sm text-slate-600 mb-1">สถานะการนัด</label>
              <select className="input" name="status" required>
                <option value="Scheduled">นัดแล้ว</option>
                <option value="Checked-In">มาถึงแล้ว</option>
                <option value="Completed">เสร็จสิ้น</option>
                <option value="Cancelled">ยกเลิกนัด</option>
                <option value="No-Show">ขาดนัด</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-medium shadow-lg hover:scale-105 transition duration-200 flex items-center gap-2"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </form>


        <table className="min-w-full border-collapse mt-5 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
              <th className="px-6 py-3 text-sm font-semibold">Patient ID</th>
              <th className="px-6 py-3 text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Date Register</th>
              <th className="px-6 py-3 text-sm font-semibold">Gender</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row: any) => (
              <tr key={row.patient_id}>
                <td className="px-6 py-3 text-gray-700">{row.patient_id}</td>
                <td className="px-6 py-3 text-gray-700">{row.name}</td>
                <td className="px-6 py-3 text-gray-700">{row.date_registered}</td>
                <td className="px-6 py-3 text-gray-700">{row.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>
    </div>
  );
}

export default EmployeeE;
