import React, { useState } from 'react';

interface StaffRow {
  staffNo: string;
  name: string;
  address: string;
  tel: string;
  position: string;
  shift: string;
}

export default function WardForm() {
  const [staffRows, setStaffRows] = useState<StaffRow[]>([
    { staffNo: '', name: '', address: '', tel: '', position: '', shift: '' },
  ]);

  const handleAddRow = () => {
    setStaffRows([
      ...staffRows,
      { staffNo: '', name: '', address: '', tel: '', position: '', shift: '' },
    ]);
  };

  const handleChange = (index: number, field: keyof StaffRow, value: string) => {
    const updatedRows = [...staffRows];
    updatedRows[index][field] = value;
    setStaffRows(updatedRows);
  };

  const handleRemoveRow = (index: number) => {
    const updatedRows = staffRows.filter((_, i) => i !== index);
    setStaffRows(updatedRows);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ข้อมูลส่ง:", staffRows);
    alert("บันทึกข้อมูลเรียบร้อย");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-6 mb-[500px] bg-white rounded-md shadow-md mt-8"
    >
      <h1 className="text-xl font-bold text-center text-cyan-700 mb-6">
        แบบฟอร์มเวรพนักงานแผนก - SUT Hospital
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input className="input" type="text" placeholder="เลขหน้า" />
        <input className="input" type="date" />
        <input className="input" type="text" placeholder="Ward Number" />
        <input className="input" type="text" placeholder="Ward Name" />
        <input className="input" type="text" placeholder="Location" />
        <input className="input" type="text" placeholder="Charge Nurse" />
        <input className="input" type="text" placeholder="Staff Number" />
        <input className="input" type="text" placeholder="Tel Extn" />
      </div>

      {/* ตารางพนักงาน */}
      <table className="w-full border border-gray-300 mt-4">
        <thead className="bg-cyan-100 text-left">
          <tr>
            <th className="border px-2 py-1">Staff No.</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Address</th>
            <th className="border px-2 py-1">Tel No.</th>
            <th className="border px-2 py-1">Position</th>
            <th className="border px-2 py-1">Shift</th>
            <th className="border px-2 py-1 text-center">ลบ</th>
          </tr>
        </thead>
        <tbody>
          {staffRows.map((row, index) => (
            <tr key={index}>
              {(['staffNo', 'name', 'address', 'tel', 'position', 'shift'] as (keyof StaffRow)[]).map((field) => (
                <td key={field} className="border px-2 py-1">
                  <input
                    className="w-full border-none"
                    placeholder={field}
                    value={row[field]}
                    onChange={(e) => handleChange(index, field, e.target.value)}
                  />
                </td>
              ))}
              <td className="border px-2 py-1 text-center">
                {staffRows.length > 1 && (
                  <button
                    type="button"
                    className="text-red-600 hover:underline"
                    onClick={() => handleRemoveRow(index)}
                  >
                    ลบ
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ปุ่ม */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
        <button
          type="button"
          onClick={handleAddRow}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
        >
          + เพิ่มแถวพนักงาน
        </button>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          บันทึกข้อมูล
        </button>
      </div>
    </form>
  );
}
