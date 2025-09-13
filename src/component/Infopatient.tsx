import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// ---------- types ----------
type NextOfKin = { id: number; name: string; relationship: string; address: string; phone: string; };
type LocalDoctor = { clinicNo: number | string | null; name: string | null; address: string | null; phone: string | null; };
type PatientView = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string | null;
  gender: string | null;
  address: string | null;
  phone: string | null;
  dateRegistered: string | null;
  clinicNo: number | string | null;
  nextOfKin: NextOfKin[];
  localDoctor: LocalDoctor | null;
};

const API_BASE = (import.meta as any).env?.VITE_API_BASE?.toString() || "http://localhost:3000";

function fmtDate(d?: string | null) {
  if (!d) return "-";
  const dt = new Date(d);
  if (isNaN(+dt)) return d;
  return dt.toLocaleDateString("th-TH", { day: "2-digit", month: "short", year: "numeric" });
}

export default function Infopatient() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PatientView | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ok">("idle");
  const [error, setError] = useState<string | null>(null);

  const fullName = useMemo(() => {
    if (!data) return "-";
    return `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim() || "-";
  }, [data]);

  useEffect(() => {
    if (!id) return;
    setStatus("loading");
    setError(null);

    axios
      .get<PatientView>(`${API_BASE}/employee/Infopatient/${id}`)
      .then((res) => {
        setData(res.data);
        setStatus("ok");
      })
      .catch((err) => {
        console.error(err);
        setError(err?.response?.data?.message || "โหลดข้อมูลไม่สำเร็จ (patient/info)");
        setStatus("error");
      });
  }, [id]);

  if (!id) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="rounded-xl border bg-white p-6">
          <p className="text-red-600">ไม่พบพารามิเตอร์ id ใน URL</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b pb-6">
        <div>
          <h1 className="text-2xl font-bold">Patient Report</h1>
          <p className="text-gray-500 mt-1">เอกสารสรุปข้อมูลผู้ป่วย</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          <span className="mr-2">ID อ้างอิง:</span>
          <span className="font-mono">{id}</span>
        </div>
      </div>

      {/* Loading */}
      {status === "loading" && (
        <div className="mt-8 grid gap-6">
          <div className="animate-pulse h-24 bg-gray-100 rounded-xl" />
          <div className="animate-pulse h-48 bg-gray-100 rounded-xl" />
          <div className="animate-pulse h-48 bg-gray-100 rounded-xl" />
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
          <p className="font-medium mb-1">เกิดข้อผิดพลาด</p>
          <p>{error}</p>
          <div className="mt-3 text-sm">
            <p>ตรวจสอบ:</p>
            <ul className="list-disc ml-5">
              <li>URL API ถูกต้องหรือไม่ (ควรเป็นพอร์ต 3000 ไม่ใช่ 5173)</li>
              <li>Service <code>findById</code> ทำงาน/คิวรีถูกต้อง</li>
              <li>CORS/Authentication ถ้ามี</li>
            </ul>
          </div>
        </div>
      )}

      {/* Content */}
      {status === "ok" && data && (
        <>
          {/* Summary */}
          <section className="mt-8 border-b pb-6">
            <h2 className="text-xl font-bold">สรุปข้อมูลผู้ป่วย</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">รหัส</dt>
                  <dd className="col-span-2 font-medium">{data.id ?? "-"}</dd>

                  <dt className="text-gray-500">ชื่อ-นามสกุล</dt>
                  <dd className="col-span-2 font-medium">{fullName}</dd>

                  <dt className="text-gray-500">วันเกิด</dt>
                  <dd className="col-span-2">{fmtDate(data.dateOfBirth)}</dd>

                  <dt className="text-gray-500">เพศ</dt>
                  <dd className="col-span-2">{data.gender || "-"}</dd>
                </dl>
              </div>

              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ที่อยู่</dt>
                  <dd className="col-span-2">{data.address || "-"}</dd>

                  <dt className="text-gray-500">เบอร์โทร</dt>
                  <dd className="col-span-2">{data.phone || "-"}</dd>

                  <dt className="text-gray-500">วันลงทะเบียน</dt>
                  <dd className="col-span-2">{fmtDate(data.dateRegistered)}</dd>

                  <dt className="text-gray-500">คลินิกประจำ</dt>
                  <dd className="col-span-2">{data.clinicNo ?? "-"}</dd>
                </dl>
              </div>
            </div>
          </section>

          {/* Next of Kin */}
          <section className="mt-8 border-b pb-6">
            <h2 className="text-xl font-bold">ข้อมูลญาติที่ติดต่อได้</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 py-3 text-sm font-semibold">ชื่อญาติ</th>
                    <th className="px-4 py-3 text-sm font-semibold">ความสัมพันธ์</th>
                    <th className="px-4 py-3 text-sm font-semibold">ที่อยู่</th>
                    <th className="px-4 py-3 text-sm font-semibold">เบอร์โทร</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data.nextOfKin?.length ? (
                    data.nextOfKin.map((k) => (
                      <tr key={k.id}>
                        <td className="px-4 py-3">{k.name || "-"}</td>
                        <td className="px-4 py-3">{k.relationship || "-"}</td>
                        <td className="px-4 py-3">{k.address || "-"}</td>
                        <td className="px-4 py-3">{k.phone || "-"}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="px-4 py-3 text-gray-500" colSpan={4}>
                        ไม่พบข้อมูลญาติ
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Local Doctor */}
          <section className="mt-8">
            <h2 className="text-xl font-bold">แพทย์ประจำ</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">รหัสคลินิก</dt>
                  <dd className="col-span-2 font-medium">{data.localDoctor?.clinicNo ?? "-"}</dd>

                  <dt className="text-gray-500">ชื่อ-สกุลแพทย์</dt>
                  <dd className="col-span-2">{data.localDoctor?.name || "-"}</dd>
                </dl>
              </div>
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ที่อยู่</dt>
                  <dd className="col-span-2">{data.localDoctor?.address || "-"}</dd>

                  <dt className="text-gray-500">เบอร์โทร</dt>
                  <dd className="col-span-2">{data.localDoctor?.phone || "-"}</dd>
                </dl>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-8 flex items-center gap-3 text-sm">
            <Link
              to="/employee"
              className="inline-flex items-center rounded-lg px-4 py-2 ring-1 ring-gray-300 hover:bg-gray-50"
            >
              ← กลับหน้ารายการ
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">
              อัปเดตล่าสุด: {new Date().toLocaleString("th-TH")}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
