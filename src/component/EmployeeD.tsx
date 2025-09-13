import { motion } from "framer-motion";
import { User2, Phone, Stethoscope, Building2 , UsersRound } from "lucide-react";
import axios from "axios";
import { useState, useMemo } from "react";

type ClinicInfo = {
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
};

// ข้อมูลคลินิกตัวอย่าง (แก้ไขตามจริงได้เลย)
const CLINICS: Record<string, ClinicInfo> = {
  "1": { first_name: "หนึ่ง", last_name: "วัน", address: "111/1 clinic1", phone: "111" },
  "2": { first_name: "สอง", last_name: "ทู", address: "222/2 clinic2", phone: "222" },
  "3": { first_name: "สาม", last_name: "ทรี", address: "333/3 clinic3", phone: "333" },
  "4": { first_name: "สี่", last_name: "โฟ", address: "444/4 clinic4", phone: "444" },
  "5": { first_name: "ห้า", last_name: "ไฟว์", address: "555/5 clinic5", phone: "555" },
};

function EmployeeD() {
  const [loading, setLoading] = useState(false);

  // เลขคลินิกที่เลือกไว้ ("0" = ไม่มีแพทย์ส่วนตัว)
  const [clinicNo, setClinicNo] = useState<string>("0");

  // ฟิลด์แพทย์/คลินิก (controlled)
  const [docFirst, setDocFirst] = useState("");
  const [docLast, setDocLast] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicPhone, setClinicPhone] = useState("");

  // เมื่อเลือกคลินิก -> เติมค่าอัตโนมัติ
  const onSelectClinic = (val: string) => {
    setClinicNo(val);
    if (val === "0") {
      setDocFirst("");
      setDocLast("");
      setClinicAddress("");
      setClinicPhone("");
    } else {
      const c = CLINICS[val];
      setDocFirst(c?.first_name ?? "");
      setDocLast(c?.last_name ?? "");
      setClinicAddress(c?.address ?? "");
      setClinicPhone(c?.phone ?? "");
    }
  };

  // ส่งฟอร์ม
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // NOTE: วันที่ใน form ใช้ name="date_registerd" (สะกดเดิม) → map ไปเป็น date_registered ใน payload
    const payload = {
      patient: {
        first_name: data.first_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        address_line: data.address_line,
        phone: data.phone,
        date_registered: data.date_registerd || null,
        clinic_no: clinicNo === "0" ? null : clinicNo, // เก็บเฉพาะเมื่อมีคลินิก
      },
      kin: {
        kin_name: data.kin_name || null,
        kin_relationship: data.kin_relationship || null,
        kin_address_line: data.kin_address_line || null,
        kin_phone: data.kin_phone || null,
      },
      // ถ้าไม่อยากส่ง block นี้ ให้ลบทิ้งได้
      local_doctor:
        clinicNo === "0"
          ? null
          : {
              clinic_no: clinicNo,
              first_name: docFirst || null,
              last_name: docLast || null,
              address_line: clinicAddress || null,
              phone: clinicPhone || null,
            },
    };

    try {
      const res = await axios.post("http://localhost:3000/employee/D", payload);
      alert("✅ บันทึกข้อมูลเรียบร้อย: patient_id = " + res.data.patientId);
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 py-12 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto border-l-8 border-cyan-500 pl-4 mb-8"
      >
        <h1 className="text-3xl md:text-4xl text-cyan-800 font-bold">
          แบบฟอร์มลงทะเบียนผู้ป่วย
        </h1>
      </motion.div>

      {/* Form Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto"
      >
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Patient Info */}
          <div>
            <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
              <User2 className="h-5 w-5" /> ข้อมูลผู้ป่วย
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" className="input" placeholder="ชื่อ" name="first_name" required />
              <input type="text" className="input" placeholder="นามสกุล" name="last_name" required />
              <input type="text" className="input md:col-span-2" placeholder="ที่อยู่" name="address_line" required />
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">วันเกิด</label>
                <input type="date" className="input" name="date_of_birth" required/>
              </div>
              <select className="input" name="gender" required>
                <option value="">เพศ</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                {/* แนะนำให้ใช้ type="tel" เพื่อคงเลข 0 นำหน้าได้ */}
                <input type="tel" className="input" placeholder="เบอร์โทรศัพท์" name="phone" required/>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">วันที่ขึ้นทะเบียนผู้ป่วย</label>
                {/* name เดิม: date_registerd (มี d เกิน) → ปล่อยไว้แต่ map ใน payload */}
                <input type="date" className="input" name="date_registerd" />
              </div>
            </div>
          </div>

          {/* KIN Info */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center gap-2">
              <UsersRound  className="h-5 w-5" /> ข้อมูลญาติ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" className="input" placeholder="ชื่อ-สกุล" name="kin_name" />
              <input type="text" className="input" placeholder="ความสัมพันธ์" name="kin_relationship" />
              <input type="text" className="input" placeholder="ที่อยู่" name="kin_address_line" />
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400" />
                <input type="tel" className="input" placeholder="เบอร์โทรศัพท์" name="kin_phone" />
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div>
            <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              <Stethoscope className="h-5 w-5" /> ข้อมูลแพทย์ประจำ (ถ้ามี)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="clinic_no"
                value={clinicNo}
                onChange={(e) => onSelectClinic(e.target.value)}
                className="input"
              >
                <option value="0">ไม่มีแพทย์ส่วนตัว</option>
                <option value="1">C01</option>
                <option value="2">C02</option>
                <option value="3">C03</option>
                <option value="4">C04</option>
                <option value="5">C05</option>
              </select>

              {/* ช่องด้านล่างเป็น controlled ทั้งหมด */}
              <input
                type="text"
                className="input"
                placeholder="ที่อยู่ของคลินิก"
                name="lo_address_line"
                value={clinicAddress}
                onChange={(e) => setClinicAddress(e.target.value)}
                disabled={clinicNo === "0"}
              />
              <input
                type="text"
                className="input"
                placeholder="ชื่อแพทย์"
                name="doctor_name"
                value={docFirst}
                onChange={(e) => setDocFirst(e.target.value)}
                disabled={clinicNo === "0"}
              />
              <input
                type="text"
                className="input"
                placeholder="สกุลแพทย์"
                name="lo_last_name"
                value={docLast}
                onChange={(e) => setDocLast(e.target.value)}
                disabled={clinicNo === "0"}
              />
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  className="input"
                  placeholder="เบอร์โทรศัพท์คลินิก"
                  name="lo_phone"
                  value={clinicPhone}
                  onChange={(e) => setClinicPhone(e.target.value)}
                  disabled={clinicNo === "0"}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-medium shadow-lg hover:scale-105 transition duration-200 flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
            </button>
          </div>
        </form>
      </motion.section>
    </div>
  );
}

export default EmployeeD;
