import React, { useState } from "react";
import axios from "axios";

export default function SupplierForm() {


  const [supplierName, setSupplierName] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");
  const [supplierAddress, setSupplierAddress] = useState("");
  const [supplierFax, setSupplierFax] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ตรวจสอบว่ากรอกชื่อผู้จัดจำหน่ายครบ
    if (!supplierName) {
      alert("กรุณากรอกชื่อผู้จัดจำหน่าย");
      return;
    }

    const payload = {
      supplier_name: supplierName.trim(),
      phone: supplierPhone.trim(),
      address_line: supplierAddress.trim(),
      fax: supplierFax.trim(),
    };

    try {
      await axios.post(`http://localhost:3000/supplier/SupplierForm`, payload);
      alert("บันทึกข้อมูลผู้จัดจำหน่ายสำเร็จ ✨");

      // เคลียร์ฟอร์มหลังจากบันทึกสำเร็จ
      setSupplierName("");
      setSupplierPhone("");
      setSupplierAddress("");
      setSupplierFax("");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10 mb-28">
      {/* Header */}
      <div className="sticky top-0 z-10 -mx-3 mb-6 md:-mx-0">
        <div className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white rounded-2xl shadow-lg px-6 py-6 md:px-8 md:py-7">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            ข้อมูลผู้จัดจำหน่าย
          </h1>
          <p className="text-white/90 mt-1 text-sm md:text-base">
            กรอกข้อมูลให้ครบถ้วน แล้วกด “บันทึกข้อมูล”
          </p>
        </div>
      </div>

      {/* ฟอร์มข้อมูลผู้จัดจำหน่าย */}
      <section className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700">ชื่อผู้จัดจำหน่าย</span>
            <input
              className="input"
              type="text"
              name="supplier_name"
              value={supplierName}
              onChange={(e) => setSupplierName(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700">ที่อยู่</span>
            <input
              className="input"
              type="text"
              name="address_line"
              value={supplierAddress}
              onChange={(e) => setSupplierAddress(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700">เบอร์โทร</span>
            <input
              className="input"
              type="tel"
              name="phone"
              value={supplierPhone}
              onChange={(e) => setSupplierPhone(e.target.value)}
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-gray-700">Fax</span>
            <input
              className="input"
              type="text"
              name="fax"
              value={supplierFax}
              onChange={(e) => setSupplierFax(e.target.value)}
            />
          </label>
        </div>
      </section>

      {/* ปุ่มบันทึก */}
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="rounded-xl px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white font-medium shadow hover:brightness-110 active:scale-[.99]"
        >
          บันทึกข้อมูล
        </button>
      </div>
    </form>
  );
}