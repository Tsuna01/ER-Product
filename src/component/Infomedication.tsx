// src/pages/Infomedication.tsx
import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

type Prescription = {
  patientId: number;
  unitsPerDay: number | null;
  startDate: string | null;
  endDate: string | null;
  prescribedBy: number | null;
  prescriberName: string | null;
};

type PatientInfo = {
  id: number;
  name: string | null;
  dateRegistered: string | null;
};

type ItemInfo = {
  id: number;
  name: string | null;
  type: string | null;
  method: string | null;
  dosage: string | null;
  description: string | null;
  stock: number | null;
  costPerUnit: number | null;
};

type SupplierInfo = {
  id: number | null;
  name: string | null;
  address: string | null;
  phone: string | null;
  fax: string | null;
};

type MedicationView = {
  id: number;
  prescription: Prescription;
  patient: PatientInfo;
  item: ItemInfo;
  supplier: SupplierInfo;
};

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE?.toString() || "http://localhost:3000";

function fmtDate(d?: string | null) {
  if (!d) return "-";
  const dt = new Date(d);
  if (isNaN(+dt)) return d;
  return dt.toLocaleDateString("th-TH", { day: "2-digit", month: "short", year: "numeric" });
}

export default function Infomedication() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<MedicationView | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ok">("idle");
  const [error, setError] = useState<string | null>(null);

  const patientName = useMemo(() => data?.patient?.name || "-", [data]);

  useEffect(() => {
    if (!id) return;
    setStatus("loading");
    setError(null);

    axios
      .get<MedicationView>(`${API_BASE}/medications/info/${id}`)
      .then((res) => {
        setData(res.data);
        setStatus("ok");
      })
      .catch((err) => {
        console.error(err);
        setError(err?.response?.data?.message || "โหลดข้อมูลไม่สำเร็จ (medication/info)");
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
          <h1 className="text-2xl font-bold">Medication Report</h1>
          <p className="text-gray-500 mt-1">เอกสารรายละเอียดการจ่ายยา</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          <span className="mr-2">MED ID:</span>
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
              <li>URL API เป็นพอร์ต 3000 และ path `/medication/info/:id`</li>
              <li>คิวรีใน backend ถูกต้อง</li>
              <li>CORS/Session ถ้ามี</li>
            </ul>
          </div>
        </div>
      )}

      {/* Content */}
      {status === "ok" && data && (
        <>
          {/* Prescription Summary */}
          <section className="mt-8 border-b pb-6">
            <h2 className="text-xl font-bold">สรุปการจ่ายยา</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ผู้ป่วย</dt>
                  <dd className="col-span-2 font-medium">
                    {patientName} <span className="text-gray-400">(# {data.patient.id})</span>
                  </dd>

                  <dt className="text-gray-500">เริ่มใช้ยา</dt>
                  <dd className="col-span-2">{fmtDate(data.prescription.startDate)}</dd>

                  <dt className="text-gray-500">สิ้นสุด</dt>
                  <dd className="col-span-2">{fmtDate(data.prescription.endDate)}</dd>

                  <dt className="text-gray-500">หน่วย/วัน</dt>
                  <dd className="col-span-2">{data.prescription.unitsPerDay ?? "-"}</dd>
                </dl>
              </div>

              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ผู้สั่งจ่าย</dt>
                  <dd className="col-span-2">
                    {data.prescription.prescriberName || "-"}
                    {data.prescription.prescribedBy ? (
                      <span className="text-gray-400"> (staff #{data.prescription.prescribedBy})</span>
                    ) : null}
                  </dd>

                  <dt className="text-gray-500">ลงทะเบียนผู้ป่วย</dt>
                  <dd className="col-span-2">{fmtDate(data.patient.dateRegistered)}</dd>

                  <dt className="text-gray-500">คลังคงเหลือ (ไอเท็มนี้)</dt>
                  <dd className="col-span-2">{data.item.stock ?? "-"}</dd>
                </dl>
              </div>
            </div>
          </section>

          {/* Item Detail */}
          <section className="mt-8 border-b pb-6">
            <h2 className="text-xl font-bold">ข้อมูลยา/เวชภัณฑ์</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ชื่อ</dt>
                  <dd className="col-span-2 font-medium">{data.item.name || "-"}</dd>

                  <dt className="text-gray-500">ประเภท</dt>
                  <dd className="col-span-2">{data.item.type || "-"}</dd>

                  <dt className="text-gray-500">วิธีใช้</dt>
                  <dd className="col-span-2">{data.item.method || "-"}</dd>

                  <dt className="text-gray-500">ขนาดยา</dt>
                  <dd className="col-span-2">{data.item.dosage || "-"}</dd>
                </dl>
              </div>

              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ราคา/หน่วย</dt>
                  <dd className="col-span-2">{data.item.costPerUnit ?? "-"}</dd>

                  <dt className="text-gray-500">คำอธิบาย</dt>
                  <dd className="col-span-2">{data.item.description || "-"}</dd>
                </dl>
              </div>
            </div>
          </section>

          {/* Supplier */}
          <section className="mt-8">
            <h2 className="text-xl font-bold">ผู้จัดจำหน่าย</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">บริษัท</dt>
                  <dd className="col-span-2 font-medium">{data.supplier.name || "-"}</dd>

                  <dt className="text-gray-500">รหัส</dt>
                  <dd className="col-span-2">{data.supplier.id ?? "-"}</dd>
                </dl>
              </div>
              <div className="rounded-xl ring-1 ring-gray-200 p-5">
                <dl className="grid grid-cols-3 gap-y-2 text-sm">
                  <dt className="text-gray-500">ที่อยู่</dt>
                  <dd className="col-span-2">{data.supplier.address || "-"}</dd>

                  <dt className="text-gray-500">เบอร์โทร</dt>
                  <dd className="col-span-2">{data.supplier.phone || "-"}</dd>

                  <dt className="text-gray-500">แฟกซ์</dt>
                  <dd className="col-span-2">{data.supplier.fax || "-"}</dd>
                </dl>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-8 flex items-center gap-3 text-sm">
            <Link
              to="/medications"
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
