import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Workx() {
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

    // ✅ handle submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const fd = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(fd.entries());

        try {
            await axios.post("http://localhost:3000/doctor/workx", {
                organization: formObject.organization,
                position: formObject.position,
                start_date: formObject.start_date,
                end_date: formObject.end_date,
            });
            alert("บันทึกประสบการณ์ทำงานสำเร็จ ✨");
            navigate("/Adminpanel"); // กลับไปหน้าแรกหรือหน้าอื่น
        } catch (err) {
            console.error("❌ Error:", err);
            alert("บันทึกข้อมูลล้มเหลว");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mt-10 mb-28">
            {/* Header */}
            <div className="sticky top-0 z-10 -mx-3 mb-6 md:-mx-0">
                <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white rounded-2xl shadow-lg px-6 py-6 md:px-8 md:py-7">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                        แบบฟอร์มประสบการณ์ทำงาน
                    </h1>
                    <p className="text-white/90 mt-1 text-sm md:text-base">
                        กรอกข้อมูลให้ครบถ้วน จากนั้นกด “บันทึก”
                    </p>
                </div>
            </div>

            {/* ฟอร์ม */}
            <div className="grid grid-cols-1 gap-6">
                <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
                    <h2 className="text-lg font-semibold text-cyan-800">ประสบการณ์ทำงาน</h2>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="ชื่อหน่วยงาน/องค์กร">
                            <input type="text" className="input" name="organization" required />
                        </Field>

                        <Field label="ตำแหน่งงาน">
                            <input type="text" className="input" name="position" required />
                        </Field>

                        <Field label="วันที่เริ่มงาน">
                            <input type="date" className="input" name="start_date" required />
                        </Field>

                        <Field label="วันที่สิ้นสุดงาน">
                            <input type="date" className="input" name="end_date" />
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
