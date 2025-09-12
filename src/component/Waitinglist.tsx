import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

type WaitingForm = {
  patient_id: string;
  ward_id: string;
  date_added: string;      
  priority_level: string;  
  status: string;          
};

type WaitingRow = {
  waiting_list_id: number;
  patient_id: number;
  ward_id: number;
  date_added: string;      
  priority_level: number;  
  status: string;
  name?: string;           
};

// base URL จาก .env

// label ของ priority
const PRIORITY_LABEL: Record<string, string> = {
  "1": "ด่วน",
  "2": "ค่อนข้างด่วน",
  "3": "ปกติ",
};

export default function Waitinglist() {
  const [form, setForm] = useState<WaitingForm>({
    patient_id: "",
    ward_id: "",
    date_added: "",
    priority_level: "",
    status: "",
  });

  const [rows, setRows] = useState<WaitingRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const onChange =
    (key: keyof WaitingForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const canSubmit = useMemo(() => {
    const { patient_id, ward_id, date_added, priority_level, status } = form;
    return (
      patient_id.trim() &&
      ward_id.trim() &&
      date_added &&
      priority_level &&
      status === "Waiting"
    );
  }, [form]);

  // โหลดตารางเฉพาะสถานะ Waiting
  const fetchWaiting = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<WaitingRow[]>(
        `http://localhost:3000/employee/waiting`,
        { params: { status: "Waiting" } }
      );
      setRows(data ?? []);
    } catch (e) {
      console.error(e);
      alert("โหลดรายการรอเตียงไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  };

  // เปลี่ยน status เป็น Waiting -> โหลดตาราง
  useEffect(() => {
    if (form.status === "Waiting") fetchWaiting();
  }, [form.status]);

  // เพิ่มรายการ (เฉพาะ Waiting)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) {
      alert("กรอกข้อมูลให้ครบ และเลือกสถานะเป็น Waiting");
      return;
    }
    try {
      await axios.post(`http://localhost:3000/employee/waiting`, form);
      alert("บันทึกสำเร็จ");
      await fetchWaiting();
      setForm({
        patient_id: "",
        ward_id: "",
        date_added: "",
        priority_level: "",
        status: "Waiting", // คง Waiting ไว้จะได้เห็นตารางต่อเนื่อง
      });
    } catch (e) {
      console.error(e);
      alert("บันทึกไม่สำเร็จ");
    }
  };

  // อัปเดตสถานะรายแถว
  const updateStatus = async (id: number, status: string) => {
    setUpdatingId(id);
    try {
      await axios.patch(`http://localhost:3000/employee/waiting/${id}/status`, { status });
      if (status !== "Waiting") {
        setRows((prev) => prev.filter((r) => r.waiting_list_id !== id));
      } else {
        await fetchWaiting();
      }
    } catch (e) {
      console.error(e);
      alert("อัปเดตสถานะไม่สำเร็จ");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-cyan-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto border-l-8 border-cyan-500 pl-4 mb-8"
      >
        <h1 className="text-3xl md:text-4xl text-cyan-800 font-bold">
          เพิ่มผู้ป่วยรอเตียง
        </h1>
        <p className="text-sm text-slate-500 mt-1">API: http://localhost:3000/employee/waiting</p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-3xl mx-auto"
      >
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-xl font-semibold text-cyan-700 mb-4 flex items-center gap-2">
              <User2 className="h-5 w-5" /> ข้อมูลการเพิ่มผู้ป่วย
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                className="input"
                placeholder="Patient ID."
                name="patient_id"
                value={form.patient_id}
                onChange={onChange("patient_id")}
                required
              />
              <input
                type="text"
                className="input"
                placeholder="Ward ID."
                name="ward_id"
                value={form.ward_id}
                onChange={onChange("ward_id")}
                required
              />

              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">วันที่เข้าคิว</label>
                <input
                  type="date"
                  className="input"
                  name="date_added"
                  value={form.date_added}
                  onChange={onChange("date_added")}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">ความสำคัญ</label>
                <select
                  className="input"
                  value={form.priority_level}
                  onChange={onChange("priority_level")}
                  required
                >
                  <option value="">--------</option>
                  <option value="1">ด่วน</option>
                  <option value="2">ค่อนข้างด่วน</option>
                  <option value="3">ปกติ</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-slate-600 mb-1">สถานะ</label>
                <select
                  className="input"
                  value={form.status}
                  onChange={onChange("status")}
                  required
                >
                  <option value="">--------</option>
                  <option value="Waiting">รอเตียง</option>
                  <option value="Assigned">ได้เตียงแล้ว</option>
                  <option value="Cancelled">ยกเลิก</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!canSubmit}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-medium shadow-lg hover:scale-105 transition duration-200 disabled:opacity-60"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </motion.section>

      {form.status === "Waiting" && (
        <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6 mt-8 w-full max-w-6xl mx-auto">
          <h3 className="font-bold mb-4 text-lg text-cyan-700">
            ตารางผู้ป่วยที่อยู่ในคิวรอเตียง (Waiting)
          </h3>

          {loading ? (
            <p className="text-slate-600">กำลังโหลดข้อมูล…</p>
          ) : rows.length === 0 ? (
            <p className="text-slate-600">ยังไม่มีข้อมูล</p>
          ) : (
            <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
                  <th className="px-4 py-2 text-sm font-semibold">Waiting ID</th>
                  <th className="px-4 py-2 text-sm font-semibold">Patient ID</th>
                  <th className="px-4 py-2 text-sm font-semibold">Name</th>
                  <th className="px-4 py-2 text-sm font-semibold">Ward ID</th>
                  <th className="px-4 py-2 text-sm font-semibold">Date Added</th>
                  <th className="px-4 py-2 text-sm font-semibold">Priority</th>
                  <th className="px-4 py-2 text-sm font-semibold">Status</th>
                  <th className="px-4 py-2 text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rows.map((r) => (
                  <tr key={r.waiting_list_id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{r.waiting_list_id}</td>
                    <td className="px-4 py-2">{r.patient_id}</td>
                    <td className="px-4 py-2">{r.name ?? "-"}</td>
                    <td className="px-4 py-2">{r.ward_id}</td>
                    <td className="px-4 py-2">
                      {new Date(r.date_added).toISOString().slice(0, 10)}
                    </td>
                    <td className="px-4 py-2">
                      {PRIORITY_LABEL[String(r.priority_level)] ?? r.priority_level}
                    </td>
                    <td className="px-4 py-2">{r.status}</td>
                    <td className="px-4 py-2">
                      <select
                        className="input w-40"
                        defaultValue={r.status}
                        onChange={(e) => updateStatus(r.waiting_list_id, e.target.value)}
                        disabled={updatingId === r.waiting_list_id}
                      >
                        <option value="Waiting">รอเตียง</option>
                        <option value="Assigned">ได้เตียงแล้ว</option>
                        <option value="Cancelled">ยกเลิก</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
