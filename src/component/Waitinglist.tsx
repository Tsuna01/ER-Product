import { motion } from "framer-motion";
import { User2, Phone, Stethoscope, Building2, UsersRound } from "lucide-react";

function Waitinglist() {
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
          เพิ่มผู้ป่วยรอเตียง
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
              <User2 className="h-5 w-5" /> ข้อมูลการเพิ่มผู้ป่วย
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" className="input" placeholder="Patient ID." name="patient_id" />
              <input type="text" className="input" placeholder="Ward ID." name="ward_id" />
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">วันที่เข้าคิว</label>
                <input type="date" className="input" name="date_added" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">ความสำคัญ</label>
                <select className="input">
                  <option value="">--------</option>
                  <option value="Urgen">ด่วน</option>
                  <option value="Semi-urgent">ค่อนข้างด่วน</option>
                  <option value="Non-urgent">ปกติ</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">สถานะ</label>
                <select className="input">
                  <option value="">--------</option>
                  <option value="Waiting">อยู่ในคิวรอเตียง</option>
                  <option value="Assigned">ได้เตียงแล้ว</option>
                  <option value="Cancelled">ยกเลิกรอเตียง</option>
                </select>
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
  )
}

export default Waitinglist
