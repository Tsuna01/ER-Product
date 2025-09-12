import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StaffForm() {
  const navigate = useNavigate();

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

    const fd = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(fd.entries());

    try {
      await axios.post("http://localhost:3000/doctor/StaffForm", formObject);
      alert("ส่งฟอร์มสำเร็จ ✨");
      navigate("/doctor/QualiForm");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
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
            กรอกข้อมูลให้ครบถ้วน จากนั้นกด “บันทึก” ที่แถบด้านล่าง
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* ข้อมูลส่วนตัว */}
        <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
          <h2 className="text-lg font-semibold text-cyan-800">ข้อมูลส่วนตัว</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="ชื่อ">
              <input className="input" name="first_name" type="text" required />
            </Field>
            <Field label="นามสกุล">
              <input className="input" name="last_name" type="text" required />
            </Field>
            <Field label="เพศ">
              <select className="input" name="gender" defaultValue="M">
                <option value="M">ชาย</option>
                <option value="F">หญิง</option>
              </select>
            </Field>
            <Field label="วันเกิด">
              <input className="input" name="date_of_birth" type="date" />
            </Field>
            <Field label="ที่อยู่">
              <input className="input" name="address_line" type="text" required />
            </Field>
            <Field label="เบอร์โทรศัพท์">
              <input className="input" name="phone" type="tel" required />
            </Field>
          </div>
        </section>

        {/* ตำแหน่งงาน */}
        <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
          <h2 className="text-lg font-semibold text-cyan-800">ตำแหน่งงาน</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="ตำแหน่งงาน">
              <select name="position" id="" className="input" required>
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
            </Field>
            <Field label="ระดับขั้นเงินเดือน">
              <select className="input" name="salary_scale" required>
                <option value="">เลือกระดับ</option>
                <option value="n1">N1</option>
                <option value="n2">N2</option>
                <option value="n3">N3</option>
                <option value="n4">N4</option>
                <option value="n5">N5</option>
                <option value="m1">M1</option>
                <option value="m2">M2</option>
                <option value="m3">M3</option>
                <option value="m4">M4</option>
                <option value="m5">M5</option>
              </select>
            </Field>
            <Field label="ประเภทการจ่ายเงินเดือน">
              <select className="input" name="salary_pay_type" required>
                <option value="">เลือกประเภท</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
              </select>
            </Field>
            <Field label="เงินเดือนปัจจุบัน">
              <input
                className="input"
                name="current_salary"
                type="number"
                min={0}
                step="0.01"
                required
              />
            </Field>
            <Field label="ประเภทสัญญาจ้างงาน">
              <select className="input" name="contract_type" required>
                <option value="">เลือกประเภท</option>
                <option value="Permanently">Permanently</option>
                <option value="Temporary">Temporary</option>
              </select>
            </Field>
            <Field label="ชั่วโมงการทำงาน/สัปดาห์">
              <input className="input" name="hours_per_week" type="number" min={0} required />
            </Field>
          </div>
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
