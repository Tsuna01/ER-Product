import React from 'react'

function ShowUpdate() {
  return (
    <div className="bg-white shadow-xl p-6 ml-19 rounded-2xl mt-6">
      <h3 className="text-xl font-bold mb-4 text-orange-600">อัพเดทการผู้ป่วย</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">ค้นหาผู้ป่วย</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="ค้นหาด้วยชื่อหรือรหัสผู้ป่วย" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">วันที่อัพเดท</label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">เวลา</label>
          <input type="time" className="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">ความดันโลหิต</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="เช่น 120/80" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">อัตราการเต้นของหัวใจ</label>
          <input type="number" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="ครั้ง/นาที" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">อุณหภูมิ</label>
          <input type="number" step="0.1" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="°C" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">ระดับความเจ็บปวด (1-10)</label>
          <select className="w-full p-2 border border-gray-300 rounded-lg">
            <option value="">เลือกระดับ</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">อาการปัจจุบัน</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="3" placeholder="อธิบายอาการปัจจุบันของผู้ป่วย"></textarea>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">การรักษาใหม่/การปรับเปลี่ยน</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="3" placeholder="การรักษาหรือยาที่เพิ่มเติม/เปลี่ยนแปลง"></textarea>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">หมายเหตุ</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="2" placeholder="หมายเหตุเพิ่มเติม"></textarea>
        </div>
        <div className="col-span-2 flex gap-4 mt-4">
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            บันทึกการอัพเดท
          </button>
          <button type="button" className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowUpdate
