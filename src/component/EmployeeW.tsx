import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

type AppointmentForm = {
    patient_id: string;
    ward_id: string;
    date_added: string;
    priority_level: string;
};

function EmployeeW() {
    const [data, setData] = useState<any>([]);


    const [form, setForm] = useState<AppointmentForm>({
        patient_id: "",
        ward_id: "",
        date_added: "",
        priority_level: "3-Normal",
    });

    const onChange =
        (key: keyof AppointmentForm) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
                setForm((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/employee/W", form);
            alert("✅ บันทึกข้อมูลสำเร็จ");
            setForm({ patient_id: "", ward_id: "", date_added: "", priority_level:  "3-Normal"});
        } catch (err) {
            console.error("❌ Error:", err);
            alert("❌ บันทึกข้อมูลล้มเหลว");
        }
    };

    useEffect(() => {
    axios.get('http://localhost:3000/employee/W/info')
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
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl mx-auto border-l-8 border-cyan-500 pl-4 mb-8"
            >
                <h1 className="text-3xl md:text-4xl text-cyan-800 mt-5 font-bold">
                    แบบฟอร์มผู้ป่วยรอเตียง
                </h1>
            </motion.div>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto"
            >
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
                            <User2 className="h-5 w-5" /> ข้อมูลผู้ป่วยรอเตียง
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="patient_id"
                                className="input"
                                placeholder="Patient ID"
                                value={form.patient_id}
                                onChange={onChange("patient_id")}
                                required
                            />
                            <input
                                type="text"
                                name="ward_id"
                                className="input"
                                placeholder="Ward ID"
                                value={form.ward_id}
                                onChange={onChange("ward_id")}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-cyan-700 mb-1">วันที่เข้ารักษา</label>
                                <input
                                    type="date"
                                    name="date_added"
                                    className="input w-full"
                                    value={form.date_added}
                                    onChange={onChange("date_added")}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-cyan-700 mb-1">Priority Level</label>
                                <select
                                    name="priority_level"
                                    className="input w-full"
                                    value={form.priority_level}
                                    onChange={onChange("priority_level")}
                                >
                                    <option value='1-Emergency'>ด่วนที่สุด</option>
                                    <option value='2-High Priority'>ด่วน</option>
                                    <option value='3-Normal'>ปกติ</option>
                                    <option value='4-Low Priority'>เล็กน้อย</option>
                                    <option value='5-Minimal'>รอได้</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-medium shadow-lg hover:scale-105 transition duration-200 disabled:opacity-60"
                        >
                            ADD
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

export default EmployeeW;
