import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function WardForm() {
  const initialState = {
    ward_id: '',
    staff_id: '',
    shift_type: '',
    start_date: '',
    end_date: '',
  };

  const [ward, setWard] = useState(initialState);
  const [infodata, setInfoData] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWard((prev) => ({ ...prev, [name]: value }));
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/doctor/WardForm");
      setInfoData(response.data);
      console.log("📦 ข้อมูลทั้งหมด:", response.data);
    } catch (error) {
      console.error("❌ ดึงข้อมูลไม่สำเร็จ:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...ward,
      ward_id: Number(ward.ward_id),
      staff_id: Number(ward.staff_id),
    };

    console.log("📤 ส่งข้อมูล:", JSON.stringify(payload, null, 2));

    try {
      const res = await axios.put("http://localhost:3000/doctor/WardForm", payload);
      alert("✅ บันทึกข้อมูลเรียบร้อย");
      console.log("✅ ตอบกลับจาก backend:", res.data);

      setWard(initialState); // รีเซ็ตฟอร์ม
      await fetchData(); // โหลดข้อมูลใหม่
    } catch (err) {
      console.error("❌ ERROR:", err);
      alert("❌ เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  // โหลดข้อมูลเมื่อ component เปิดครั้งแรก
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-6 mb-[500px] bg-white rounded-md shadow-md mt-8"
    >
      <h1 className="text-xl font-bold text-center text-cyan-700 mb-6">
        แบบฟอร์มเวรพนักงานแผนก - SUT Hospital
      </h1>

      <input
        className="input"
        type="text"
        name="ward_id"
        placeholder="Ward ID"
        value={ward.ward_id || ''}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        type="text"
        name="staff_id"
        placeholder="Staff ID"
        value={ward.staff_id || ''}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        type="text"
        name="shift_type"
        placeholder="Shift (Early , Late , Night)"
        value={ward.shift_type || ''}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        type="datetime-local"
        name="start_date"
        value={ward.start_date || ''}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        type="datetime-local"
        name="end_date"
        value={ward.end_date || ''}
        onChange={handleChange}
        required
      />

      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-green-400 text-white px-4 mt-5 py-2 rounded"
        >
          บันทึกข้อมูล
        </button>
      </div>

      {/* ตารางแสดงข้อมูล */}
      <table className="table-auto mt-10 border border-gray-300 w-full rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Ward ID</th>
            <th className="border border-gray-300 px-4 py-2">Staff ID</th>
            <th className="border border-gray-300 px-4 py-2">Shift</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {infodata.map((item: any, id: number) => (
            <tr key={id}>
              <td className="border border-gray-300 px-4 py-2">{item.ward_id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.staff_id}</td>
              <td className="border border-gray-300 px-4 py-2">{item.shift_type}</td>
              <td className="border border-gray-300 px-4 py-2">{item.start_date}</td>
              <td className="border border-gray-300 px-4 py-2">{item.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
