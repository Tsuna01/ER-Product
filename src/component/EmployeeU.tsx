
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function EmployeeU() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>([]);
    const [bed, setBed] = useState<any>([]);
    const [activeForm, setActiveForm] = useState("");

    const handleFormSelect = (props: any) => {
        setActiveForm(props);
    };


    useEffect(() => {
        axios.get('http://localhost:3000/employee/U/info')
            .then(response => {
                console.log("📦 ได้ข้อมูล:", response.data);
                setData(response.data);
            })

            .catch(error => {
                console.error('There was an error fetching the doctor data!', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/employee/beds/available')
            .then(response => {
                console.log("Bed ได้ข้อมูล:", response.data);
                setBed(response.data);
            })

            .catch(error => {
                console.error('There was an error fetching the doctor data!', error);
            });
    }, []);



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
            navigate("/employee");
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
                            <button className=""></button>
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
                    <div className="fixed inset-x-0 bottom-0 z-20">
                        <div className="mx-auto max-w-5xl px-4 pb-6">
                            <div className="rounded-2xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-gray-900/5 px-4 py-3 flex items-center justify-between">
                                <p className="text-sm text-gray-600 hidden md:block">
                                    ตรวจสอบความถูกต้องก่อนบันทึกข้อมูล
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        onClick={() => handleFormSelect('TableW')}
                                        className="rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white font-medium shadow hover:brightness-110 active:scale-[.99]"
                                    >
                                        รายชื่อผู้ป่วย
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={() => handleFormSelect('Tablebed')}
                                        className="rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white font-medium shadow hover:brightness-110 active:scale-[.99]"
                                    >
                                        เตียงที่ว่าง
                                    </button>
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
                {activeForm == 'TableW' && (<table className="min-w-full border-collapse mt-5 rounded-lg overflow-hidden shadow-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
                            <th className="px-6 py-3 text-sm font-semibold">Patient No.</th>
                            <th className="px-6 py-3 text-sm font-semibold">Name</th>
                            <th className="px-6 py-3 text-sm font-semibold">Ward ID</th>
                            <th className="px-6 py-3 text-sm font-semibold">Date Added</th>
                            <th className="px-6 py-3 text-sm font-semibold">Priority</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((d: any) => (
                            <tr key={d.patient_id}>
                                <td className="px-6 py-3">{d.patient_id}</td>
                                <td className="px-6 py-3">{d.name}</td>
                                <td className="px-6 py-3">{d.ward_id}</td>
                                <td className="px-6 py-3">
                                    {d.date_added ? new Date(d.date_added).toLocaleString("th-TH") : "-"}
                                </td>
                                <td className="px-6 py-3">{d.priority_level}</td>
                            </tr>
                        ))}

                        {data.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-6 text-center text-gray-500">
                                    ไม่พบข้อมูล
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                )}
                {activeForm == 'Tablebed' && (
                    <table className="min-w-full border-collapse mt-5 rounded-lg overflow-hidden shadow-sm">
                        <thead>
                            <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
                                <th className="px-6 py-3 text-sm font-semibold">Bed Id.</th>
                                <th className="px-6 py-3 text-sm font-semibold">Ward Id.</th>
                                <th className="px-6 py-3 text-sm font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {bed.map((b:any)=>(
                            <tr key={b.bed_id}>
                                <td className="px-6 py-3">{b.bed_id}</td>
                                <td className="px-6 py-3">{b.ward_id}</td>
                                <td className="px-6 py-3">{b.status}</td>
                            </tr>
                            ))}

                        </tbody>
                    </table>

                )}
            </motion.section>
        </div>
    )
}

export default EmployeeU

