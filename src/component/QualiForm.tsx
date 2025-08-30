import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface QualiFormProps {
  onSubmit?: (data: FormData) => void | Promise<void>;
}

interface EducationRow {
  qual_type: string;
  qual_date: string;
  institution: string;

}

export default function QualiForm({ onSubmit }: QualiFormProps) {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  // เก็บหลายวุฒิ
  const [educationRows, setEducationRows] = useState<EducationRow[]>([
    { qual_type: "", qual_date: "", institution: ""},
  ]);

  const Field: React.FC<{ label?: string; children: React.ReactNode }> = ({
    label,
    children,
  }) => (
    <label className="flex flex-col gap-1.5">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      {children}
    </label>
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // FormData → Object
    const fd = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(fd.entries());

    const dataToSend = {
      ...formObject,
      education: educationRows, // ✅ ส่ง array
    };

    try {
      await axios.post("http://localhost:3000/doctor/QualiForm", dataToSend);
      alert("ส่งข้อมูลสำเร็จ ✨");
      navigate("/doctor/Workx");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("ส่งข้อมูลล้มเหลว");
    }
  };
  // เพิ่มวุฒิใหม่
  const handleAddEducation = () => {
    setEducationRows([
      ...educationRows,
      { qual_type: "", qual_date: "", institution: ""},
    ]);
  };

  // ลบวุฒิ
  const handleRemoveEducation = (index: number) => {
    setEducationRows(educationRows.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mt-10 mb-28">
      {/* Header */}
      <div className="sticky top-0 z-10 -mx-3 mb-6 md:-mx-0">
        <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white rounded-2xl shadow-lg px-6 py-6 md:px-8 md:py-7">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            แบบฟอร์มบุคลากร
          </h1>
          <p className="text-white/90 mt-1 text-sm md:text-base">
            กรอกข้อมูลให้ครบถ้วน จากนั้นกด “บันทึก”
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* วุฒิการศึกษา */}
        <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
          <h2 className="text-lg font-semibold text-cyan-800">วุฒิการศึกษา</h2>

          {educationRows.map((row, index) => (
            <div
              key={index}
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4 mb-4"
            >
              <Field label="วุฒิการศึกษา">
                <select
                  className="input"
                  name={`education[${index}].qual_type`}
                  value={row.qual_type}
                  onChange={(e) => {
                    const newRows = [...educationRows];
                    newRows[index].qual_type = e.target.value;
                    setEducationRows(newRows);
                  }}
                >
                  <option value="">เลือกวุฒิการศึกษา</option>
                  <option value="vocational">วุฒิ ปวส.</option>
                  <option value="bachelor">ปริญญาตรี</option>
                  <option value="master">ปริญญาโท</option>
                  <option value="doctorate">ปริญญาเอก</option>
                </select>
              </Field>

              <Field label="วันจบการศึกษา">
                <input
                  type="date"
                  className="input"
                  name={`education[${index}].qual_date`}
                  value={row.qual_date || today}
                  onChange={(e) => {
                    const newRows = [...educationRows];
                    newRows[index].qual_date = e.target.value;
                    setEducationRows(newRows);
                  }}
                />

              </Field>

              <Field label="สถาบันการศึกษา">
                <input
                  type="text"
                  className="input"
                  name={`education[${index}].institution`}
                  value={row.institution}
                  onChange={(e) => {
                    const newRows = [...educationRows];
                    newRows[index].institution = e.target.value;
                    setEducationRows(newRows);
                  }}
                />
              </Field>

              {/* ปุ่มลบ */}
              {educationRows.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveEducation(index)}
                  className="text-red-400 text-sm mt-2"
                >
                  ลบวุฒิ
                </button>
              )}
            </div>
          ))}

          {/* ปุ่มเพิ่มวุฒิ */}
          <button
            type="button"
            onClick={handleAddEducation}
            className="mt-3 px-4 py-2 rounded-lg bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
          >
            + เพิ่มวุฒิการศึกษา
          </button>
        </section>
      </div>

      {/* Sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-20">
        <div className="mx-auto max-w-5xl px-4 pb-6">
          <div className="rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-gray-900/5 px-4 py-3 flex items-center justify-between">
            <p className="text-sm text-gray-600 hidden md:block">
              ตรวจสอบความถูกต้องก่อนบันทึกข้อมูล
            </p>
            <div className="flex gap-3">
              <button
                type="reset"
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
      </div>
    </form>
  );
}
