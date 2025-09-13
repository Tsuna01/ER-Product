import React, { useState,useEffect } from "react";
import axios from "axios";

function Fromdrug() {
  const [formData, setFormData] = useState({
    patient_id: "",
    item_id: "",
    prescribed_by: "",
    units_per_day: "",
    start_date: "",
    end_date: "",
  });
  const [info, setInfo] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios.get("http://localhost:3000/supplier/NumericInput/pharma/api")
      .then(response => {
        console.log("✅ ได้ข้อมูล:", response.data);
        setInfo(response.data);
      })
      .catch(error => {
        console.error("❌ เกิดข้อผิดพลาดในการโหลดข้อมูล!", error);
      });
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ตรวจสอบค่าก่อนส่ง
    if (
      !formData.patient_id ||
      !formData.item_id ||
      !formData.prescribed_by ||
      !formData.units_per_day ||
      !formData.start_date ||
      !formData.end_date
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;

    }
    try {
      await axios.post("http://localhost:3000/medications/from", {
        ...formData,
        patient_id: Number(formData.patient_id),
        item_id: Number(formData.item_id),
        units_per_day: Number(formData.units_per_day),
      });
      alert("💊 บันทึกข้อมูลสำเร็จ");

      setFormData({
        patient_id: "",
        item_id: "",
        prescribed_by: "",
        units_per_day: "",
        start_date: "",
        end_date: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 rounded-2xl mx-40 mt-5 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-700">ฟอร์มการจ่ายยา</h1>
          <p className="text-sm text-gray-500">ระบบบันทึกข้อมูลยา</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-10"
      >
        <h2 className="text-2xl font-semibold text-cyan-600 border-l-4 border-cyan-500 pl-3 mb-8">
          ข้อมูลการจ่ายยา
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Patient", name: "patient_id", type: "text" },
            { label: "DrugID", name: "item_id", type: "text" },
            { label: "Prescribed By", name: "prescribed_by", type: "text" },
            { label: "Units Per Day", name: "units_per_day", type: "number" },
            { label: "Start Date", name: "start_date", type: "date" },
            { label: "End Date", name: "end_date", type: "date" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.name == 'prescribed_by' ? 'Staff ID' : ''}
                value={(formData as any)[field.name]}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                required
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-md transition-all duration-200"
          >
            💊 บันทึกข้อมูล
          </button>
        </div>
      </form>
      <div className="max-w-5xl mx-auto mt-10 mb-10">
      <section className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6">
        <h1 className="font-bold mb-5 text-xl text-cyan-700">เวชภัณฑ์</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
                <th className="px-6 py-3 text-sm font-semibold">รหัส</th>
                <th className="px-6 py-3 text-sm font-semibold">ชื่อเวชภัณฑ์</th>
                <th className="px-6 py-3 text-sm font-semibold">ประเภทเวชภัณฑ์</th>
                <th className="px-6 py-3 text-sm font-semibold">จำนวนคงคลัง</th>
                <th className="px-6 py-3 text-sm font-semibold">ราคาต่อหน่วย</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {info.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50 even:bg-gray-50/50 transition">
                  <td className="px-6 py-3 text-gray-700">{e.id}</td>
                  <td className="px-6 py-3 text-gray-700">{e.name}</td>
                  <td className="px-6 py-3 text-gray-700">{e.item_type}</td>
                  <td className="px-6 py-3 text-gray-700">{e.quantity_in_stock}</td>
                  <td className="px-6 py-3 text-gray-700">{e.cost_per_unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </div>

    </div>
  );
}

export default Fromdrug;
