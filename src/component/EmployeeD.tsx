import { motion } from "framer-motion";
import { User2, Phone, Stethoscope, Building2 } from "lucide-react";

function EmployeeD() {
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
          แบบฟอร์มผู้ป่วยที่ได้รับการส่งตัว
        </h1>
      </motion.div>

      {/* Form Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto"
      >
        <form className="space-y-8">
          {/* Patient Info */}
          <div>
            <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
              <User2 className="h-5 w-5" /> ข้อมูลผู้ป่วย
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" className="input" placeholder="ชื่อ" name="first_name" />
              <input type="text" className="input" placeholder="นามสกุล" name="last_name" />
              <input type="text" className="input md:col-span-2" placeholder="ที่อยู่" name="address_line" />
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">วันเกิด</label>
                <input type="date" className="input" name="date_of_birth" />
              </div>
              <select className="input">
                <option value="">เพศ</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <input type="number" className="input" placeholder="เบอร์โทรศัพท์" name="phone" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">วันที่ขึ้นทะเบียนผู้ป่วย</label>
                <input type="date" className="input" name="date_registerd" />
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div>
            <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
              <Stethoscope className="h-5 w-5" /> ข้อมูลแพทย์ประจำ (ถ้ามี)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" className="input" placeholder="ชื่อแพทย์" name="doctor_name" />
              <input type="text" className="input" placeholder="Clinic No." name="clinic_no" />
              <input type="text" className="input" placeholder="Clinic Name" name="clinic_name" />
              <input type="text" className="input" placeholder="ที่อยู่ของคลินิก" name="address_line" />
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400" />
                <input type="number" className="input" placeholder="เบอร์โทรศัพท์คลินิก" name="phone" />
              </div>
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
      </motion.section>
    </div>
  );
}

export default EmployeeD;
