import React, { useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type ReqItem = {
  id: string;
  item_id: string;     // อนุญาตเป็นรหัสหรือเลขก็ได้ (ส่งออกค่อยแปลง)
  quantity: string;    // เก็บสตริงระหว่างพิมพ์
  unit_price: string;  // เก็บสตริงระหว่างพิมพ์
};

const newId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const Field: React.FC<{ label?: string; children: React.ReactNode; hint?: string }> = ({
  label,
  children,
  hint,
}) => (
  <label className="flex flex-col gap-1.5">
    {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    {children}
    {hint && <span className="text-xs text-gray-400">{hint}</span>}
  </label>
);

export default function RequisitionForm() {
  const navigate = useNavigate();

  // ----- Header form state -----
  const [wardId, setWardId] = useState("");
  const [requestedBy, setRequestedBy] = useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [requestDate, setRequestDate] = useState("");
  const [data, setData] = useState(false)

  // ----- Items state -----
  const [items, setItems] = useState<ReqItem[]>([
    { id: newId(), item_id: "", quantity: "1", unit_price: "0" },
  ]);

  const addItem = () =>
    setItems((prev) => [...prev, { id: newId(), item_id: "", quantity: "1", unit_price: "0" }]);

  const removeItem = (rowId: string) =>
    setItems((prev) => (prev.length > 1 ? prev.filter((r) => r.id !== rowId) : prev));

  const updateItem = (rowId: string, patch: Partial<ReqItem>) =>
    setItems((prev) => prev.map((r) => (r.id === rowId ? { ...r, ...patch } : r)));

  const toNumber = (v: string) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  const total = useMemo(
    () => items.reduce((sum, it) => sum + toNumber(it.quantity) * toNumber(it.unit_price), 0),
    [items]
  );

  const handleData = () => {
    setData(!data);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ตรวจฟิลด์บังคับแบบง่าย ๆ
    if (!wardId || !requestedBy || !approvedBy || !requestDate) {
      alert("กรุณากรอกข้อมูลใบเบิกให้ครบ");
      return;
    }
    if (items.length === 0 || items.some((it) => !it.item_id || toNumber(it.quantity) <= 0)) {
      alert("กรุณากรอกรายการเวชภัณฑ์ให้ถูกต้อง");
      return;
    }

    // สร้าง payload พร้อมแปลงเป็นตัวเลข
    const payload = {
      ward_id: toNumber(wardId),
      requested_by: requestedBy.trim(),
      approved_by: approvedBy.trim(),
      request_date: requestDate,
      items: items.map((it) => ({
        item_id: /^\d+$/.test(it.item_id) ? toNumber(it.item_id) : it.item_id, // ถ้าเป็นเลขล้วนค่อยแปลงเป็น number
        quantity: toNumber(it.quantity),
        unit_price: toNumber(it.unit_price),
      })),
      total_amount: total,
    };

    try {
      await axios.post(`http://localhost:3000/supplier/NumericInput`, payload);
      alert("บันทึกใบเบิกสำเร็จ ✨");
      navigate(-1);
    } catch (err) {
      console.error("❌ Error:", err);
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  };

  const resetForm = () => {
    setWardId("");
    setRequestedBy("");
    setApprovedBy("");
    setRequestDate("");
    setItems([{ id: newId(), item_id: "", quantity: "1", unit_price: "0" }]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mt-10 mb-28">
      {/* Header */}
      <div className="sticky top-0 z-10 -mx-3 mb-6 md:-mx-0">
        <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white rounded-2xl shadow-lg px-6 py-6 md:px-8 md:py-7">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">ข้อมูลใบเบิก</h1>
          <p className="text-white/90 mt-1 text-sm md:text-base">
            กรอกข้อมูลใบเบิกและรายการเวชภัณฑ์ แล้วกด “บันทึกข้อมูล”
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* ข้อมูลผู้เบิก */}
        <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
          <h2 className="text-lg font-semibold text-cyan-800">ข้อมูลผู้เบิก</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Ward ID">
              <input
                className="input"
                type="number"
                name="ward_id"
                placeholder="Ward Number"
                min={1}
                value={wardId}
                onChange={(e) => setWardId(e.target.value)}
                required
              />
            </Field>
            <Field label="เบิกโดย (Requested by)">
              <input
                className="input"
                type="text"
                name="requested_by"
                placeholder="Staff ID"
                value={requestedBy}
                onChange={(e) => setRequestedBy(e.target.value)}
                required
              />
            </Field>
            <Field label="อนุมัติโดย (Approved by)">
              <input
                className="input"
                type="text"
                name="approved_by"
                placeholder="Staff ID"
                value={approvedBy}
                onChange={(e) => setApprovedBy(e.target.value)}
                required
              />
            </Field>
            <Field label="วันที่เบิก">
              <input
                className="input"
                type="date"
                name="date_ordered"
                value={requestDate}
                onChange={(e) => setRequestDate(e.target.value)}
                required
              />
            </Field>
          </div>
        </section>

        {/* รายการเวชภัณฑ์ */}
        <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-cyan-800">ข้อมูลเวชภัณฑ์</h2>
            <button
              type="button"
              onClick={addItem}
              className="rounded-xl px-4 py-2 bg-cyan-600 text-white shadow hover:brightness-110"
            >
              + เพิ่มรายการ
            </button>
          </div>

          <div className="mt-4 space-y-4">
            {items.map((it, idx) => {
              const lineTotal = (toNumber(it.quantity) * toNumber(it.unit_price)).toLocaleString();
              return (
                <div key={it.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end rounded-xl border p-4">
                  <div className="md:col-span-5">
                    <Field label={`Item ID #${idx + 1}`} hint="ใส่รหัสสินค้า เช่น 10001 หรือ ITEM-ABC">
                      <input
                        className="input"
                        type="text"
                        name="item_id"
                        value={it.item_id}
                        onChange={(e) => updateItem(it.id, { item_id: e.target.value })}
                        required
                      />
                    </Field>
                  </div>

                  <div className="md:col-span-3">
                    <Field label="จำนวน">
                      <input
                        className="input"
                        type="number"
                        inputMode="numeric"
                        name="quantity"
                        min={0}
                        step={1}
                        value={it.quantity}
                        onChange={(e) => updateItem(it.id, { quantity: e.target.value })}
                        required
                      />
                    </Field>
                  </div>

                  <div className="md:col-span-3">
                    <Field label="ราคาต่อหน่วย">
                      <input
                        className="input"
                        type="number"
                        inputMode="decimal"
                        name="cost_per_unit"
                        min={0}
                        step="0.01"
                        value={it.unit_price}
                        onChange={(e) => updateItem(it.id, { unit_price: e.target.value })}
                        required
                      />
                    </Field>
                  </div>

                  <div className="md:col-span-1 flex md:justify-end">
                    <button
                      type="button"
                      onClick={() => removeItem(it.id)}
                      className="rounded-lg px-3 py-2 border text-gray-700 hover:bg-gray-50"
                      aria-label="ลบรายการ"
                    >
                      ลบ
                    </button>
                  </div>

                  <div className="md:col-span-12 text-right text-sm text-gray-500">
                    รวมรายการนี้: <span className="font-medium text-gray-700">{lineTotal}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-end gap-6">
            <div className="text-right">
              <div className="text-sm text-gray-500">ราคารวมทั้งหมด</div>
              <div className="text-2xl font-semibold text-gray-800">
                {total.toLocaleString()}
              </div>
            </div>
          </div>
        </section>



        {data ? (<section className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6">
          <h1 className="font-bold mb-5 text-xl text-cyan-700">รายงานการเบิก</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
                  <th className="px-6 py-3 text-sm font-semibold">Ward ID</th>
                  <th className="px-6 py-3 text-sm font-semibold">เบิกโดย Staff ID</th>
                  <th className="px-6 py-3 text-sm font-semibold">อนุมัติโดย Staff ID</th>
                  <th className="px-6 py-3 text-sm font-semibold">วันที่เบิก</th>
                  <th className="px-6 py-3 text-sm font-semibold">Name Items</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 even:bg-gray-50/50 transition">
                  <td className="px-6 py-3 text-gray-700">001</td>
                  <td className="px-6 py-3 text-gray-700">Staff-12</td>
                  <td className="px-6 py-3 text-gray-700">Staff-01</td>
                  <td className="px-6 py-3 text-gray-700">2025-09-09</td>
                  <td className="px-6 py-3 text-gray-700">Gloves, Masks</td>
                </tr>
                <tr className="hover:bg-gray-50 even:bg-gray-50/50 transition">
                  <td className="px-6 py-3 text-gray-700">002</td>
                  <td className="px-6 py-3 text-gray-700">Staff-33</td>
                  <td className="px-6 py-3 text-gray-700">Staff-05</td>
                  <td className="px-6 py-3 text-gray-700">2025-09-08</td>
                  <td className="px-6 py-3 text-gray-700">Syringe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>) : ''}


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
                type="button"
                onClick={handleData}
                className="rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white font-medium shadow hover:brightness-110 active:scale-[.99]"
              >
                รายงาน
              </button>
              <button
                type="reset"
                onClick={resetForm}
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
