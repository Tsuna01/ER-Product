import React, { useState } from 'react';

export default function WardForm() {
  const [staffRows, setStaffRows] = useState([
    { staffNo: '', name: '', address: '', tel: '', position: '', shift: '' }
  ]);

  const handleAddRow = () => {
    setStaffRows([
      ...staffRows,
      { staffNo: '', name: '', address: '', tel: '', position: '', shift: '' }
    ]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newRows = [...staffRows];
    (newRows[index] as any)[field] = value;
    setStaffRows(newRows);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mb-[500px] bg-white rounded-md shadow-md mt-8">
      <h1 className="text-xl font-bold text-center text-cyan-700 mb-6">
        แบบฟอร์มเวรพนักงานแผนก - SUT Hospital
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input className="input" type="text" placeholder="เลขหน้า"  />
        <input className="input" type="date" />
        <input className="input" type="text" placeholder="Ward Number"  />
        <input className="input" type="text" placeholder="Ward Name"  />
        <input className="input" type="text" placeholder="Location"  />
        <input className="input" type="text" placeholder="Charge Nurse"  />
        <input className="input" type="text" placeholder="Staff Number"  />
        <input className="input" type="text" placeholder="Tel Extn"  />
      </div>

      {/* ตารางรายชื่อพนักงาน */}
      <table className="w-full border border-gray-300 mt-4">
        <thead className="bg-cyan-100 text-left">
          <tr>
            <th className="border px-2 py-1">Staff No.</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Address</th>
            <th className="border px-2 py-1">Tel No.</th>
            <th className="border px-2 py-1">Position</th>
            <th className="border px-2 py-1">Shift</th>
          </tr>
        </thead>
        <tbody>
          {staffRows.map((row, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">
                <input
                  className="w-full border-none"
                  placeholder='เช่น S098'
                  value={row.staffNo}
                  onChange={(e) => handleChange(index, 'staffNo', e.target.value)}
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  className="w-full border-none"
                  placeholder="ชื่อ-นามสกุล"
                  value={row.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  className="w-full border-none"
                  placeholder="ที่อยู่"
                  value={row.address}
                  onChange={(e) => handleChange(index, 'address', e.target.value)}
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  className="w-full border-none"
                  placeholder="เบอร์โทร"
                  value={row.tel}
                  onChange={(e) => handleChange(index, 'tel', e.target.value)}
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  className="w-full border-none"
                  placeholder="ตำแหน่ง"
                  value={row.position}
                  onChange={(e) => handleChange(index, 'position', e.target.value)}
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  className="w-full border-none"
                  placeholder="Early / Late / Night"
                  value={row.shift}
                  onChange={(e) => handleChange(index, 'shift', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ปุ่ม */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
        <button
          onClick={handleAddRow}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
        >
          + เพิ่มแถวพนักงาน
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  );
}
