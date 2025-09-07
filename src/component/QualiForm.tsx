import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface EducationRow {
  qual_type: string;
  qual_date: string;
  institution: string;
}

export default function QualiForm() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [educationRows, setEducationRows] = useState<EducationRow[]>([
    { qual_type: "", qual_date: today, institution: "" },
  ]);

  // ✅ เพิ่มแถว
  const handleAddEducation = () => {
    setEducationRows([...educationRows, { qual_type: "", qual_date: today, institution: "" }]);
  };

  // ✅ ลบแถว
  const handleRemoveEducation = (index: number) => {
    setEducationRows(educationRows.filter((_, i) => i !== index));
  };

  // ✅ อัปเดตค่าในแถว
  const handleChange = (index: number, field: keyof EducationRow, value: string) => {
    const newRows = [...educationRows];
    newRows[index][field] = value;
    setEducationRows(newRows);
  };

  // ✅ ส่งข้อมูล
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/doctor/QualiForm", { education: educationRows });
      alert("ส่งข้อมูลสำเร็จ ✨");
      navigate("/doctor/Workx");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("ส่งข้อมูลล้มเหลว");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto mt-10 mb-28">
      {/* Header */}
      <div className="sticky top-0 z-10 -mx-3 mb-6">
        <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white rounded-2xl shadow-lg px-6 py-6">
          <h1 className="text-2xl font-bold">แบบฟอร์มวุฒิการศึกษา</h1>
          <p className="text-white/90 mt-1 text-sm">
            เพิ่ม/ลบข้อมูลวุฒิการศึกษาได้ตามต้องการ จากนั้นกด “บันทึกข้อมูล”
          </p>
        </div>
      </div>

      {/* วุฒิการศึกษา */}
      <section className="bg-white rounded-2xl shadow ring-1 ring-gray-200 p-6">
        <h2 className="text-lg font-semibold text-cyan-800 mb-4">วุฒิการศึกษา</h2>

        <div className="space-y-6">
          {educationRows.map((row, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl shadow-sm bg-gray-50 relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* วุฒิการศึกษา */}
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">วุฒิการศึกษา</span>
                  <select
                    className="input"
                    value={row.qual_type}
                    onChange={(e) => handleChange(index, "qual_type", e.target.value)}
                    required
                  >
                    <option value="">เลือก</option>
                    <option value="vocational">ปวส.</option>
                    <option value="bachelor">ปริญญาตรี</option>
                    <option value="master">ปริญญาโท</option>
                    <option value="doctorate">ปริญญาเอก</option>
                  </select>
                </label>

                {/* วันจบ */}
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">วันจบการศึกษา</span>
                  <input
                    type="date"
                    className="input"
                    value={row.qual_date}
                    onChange={(e) => handleChange(index, "qual_date", e.target.value)}
                    required
                  />
                </label>

                {/* สถาบัน */}
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-700">สถาบันการศึกษา</span>
                  <input
                    type="text"
                    className="input"
                    value={row.institution}
                    onChange={(e) => handleChange(index, "institution", e.target.value)}
                    placeholder="เช่น มหาวิทยาลัย..."
                    required
                  />
                </label>
              </div>

              {/* ปุ่มลบ */}
              {educationRows.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveEducation(index)}
                  className="absolute top-3 right-3 text-red-500 text-sm hover:underline"
                >
                  ลบ
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ปุ่มเพิ่ม */}
        <button
          type="button"
          onClick={handleAddEducation}
          className="mt-6 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700"
        >
          + เพิ่มวุฒิการศึกษา
        </button>
      </section>

      {/* Action bar */}
      <div className="fixed inset-x-0 bottom-0 z-20 bg-white/90 backdrop-blur border-t shadow">
        <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <p className="text-sm text-gray-600 hidden md:block">
            ตรวจสอบความถูกต้องก่อนบันทึกข้อมูล
          </p>
          <div className="flex gap-3">
            <button
              type="reset"
              onClick={() =>
                setEducationRows([{ qual_type: "", qual_date: today, institution: "" }])
              }
              className="rounded-xl px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              ล้างฟอร์ม
            </button>
            <button
              type="submit"
              className="rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white font-medium shadow hover:brightness-110 active:scale-[.99]"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
