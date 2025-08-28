
import { motion } from "framer-motion";
import { User2 } from "lucide-react";

function EmployeeE() {
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
                <form className="space-y-8">
                    {/* Patient Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
                            <User2 className="h-5 w-5" /> ข้อมูลผู้ป่วย
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" className="input" placeholder="Appointment ID" name="appointment_id" />
                            <input type="text" className="input" placeholder="Staff ID" name="staff_id" />
                            <input type="text" className="input" placeholder="Patient ID" name="patient_id" />
                            <input type="text" className="input md:col-span-2" placeholder="Examination Room" name="room_id" />
                            <input type="text" className="input" placeholder="Purpose" name="purpose" />
                            <div className="flex flex-col">
                                <label className="text-sm text-slate-600 mb-1">วันที่นัดตรวจ</label>
                                <input type="datetime-local" className="input" name="dob" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-10 ">
                            <label className="text-sm text-slate-600 mb-1">สถานะการนัด</label>
                            <select className="input" name="status" id="">
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
            </motion.section>
        </div>
    )
}

export default EmployeeE
