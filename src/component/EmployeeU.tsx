
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function EmployeeU() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            inpatient: {
                patient_id: data.patient_id,
                bed_id: data.bed_id,
                date_admitted: data.date_admitted,
                expected_stay: data.expected_stay ? Number(data.expected_stay) : null,
                expected_dis_date: data.expected_dis_date || null,
                actual_dis_date: data.actual_dis_date || null,
            },
        };

        console.log("📤 Payload:", payload);


        try {
            const res = await axios.post("http://localhost:3000/employee/U", payload);
            alert("✅ บันทึกข้อมูลเรียบร้อย: inpatient_id = " + res.data.inpatientId);
            navigate("/Adminpanel");
        } catch (err) {
            console.error("❌ Error:", err);
            alert("เกิดข้อผิดพลาด ไม่สามารถบันทึกข้อมูลได้");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b  mx-auto my-auto from-cyan-50 via-white to-cyan-50 py-12 px-4">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl mx-auto border-l-8 border-cyan-500 pl-4 mb-8"
            >
                <h1 className="text-3xl md:text-4xl text-cyan-800 mt-5 font-bold">
                    แบบฟอร์มผู้ป่วยใน
                </h1>
            </motion.div>

            {/* Form Card */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto"
            >
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Patient Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
                            <User2 className="h-5 w-5" /> ข้อมูลผู้ป่วย
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" className="input" placeholder="Patient ID" name="patient_id" required />
                            <input type="text" className="input" placeholder="Bed ID" name="bed_id" required />
                            <div className="flex flex-col">
                                <label className="text-sm text-slate-600 mb-1">วันที่รับไว้รักษา</label>
                                <input type="date" className="input" name="date_admitted" required />
                                <label className="text-sm text-slate-600 mb-1">จำนวนวันที่คาดว่าจะนอนรักษา</label>
                                <input type="number" className="input" name="expected_stay" />
                                <label className="text-sm text-slate-600 mb-1">วันที่คาดว่าจะจำหน่ายออก</label>
                                <input type="date" className="input" name="expected_dis_date" />
                                <label className="text-sm text-slate-600 mb-1">วันที่จำหน่ายออก</label>
                                <input type="date" className="input" name="actual_dis_date" />
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

export default EmployeeU

