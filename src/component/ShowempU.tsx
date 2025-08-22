
function ShowempU() {
  return (
    <div className="ml-[80px] bg-white shadow-xl shadow-gray-400 absolute mt-[30px] w-[1000px] rounded-2xl h-auto p-8">
        <h1 className="text-xl text-gray-400 my-[10px]">เลือกหอผู้ป่วย</h1>
        <select name="" className="input mb-10" id="">
            <option value="#">ทั้งหมด</option>
            <option value="#">A1</option>
            <option value="#">A2</option>
            <option value="#">B1</option>
            <option value="#">B2</option>
        </select>
      <table className="table-auto w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">ชื่อ - นามสกุล</th>
            <th className="border border-gray-300 px-4 py-2">เลขบัตรประชาชน</th>
            <th className="border border-gray-300 px-4 py-2">วันที่ส่งตัว</th>
            <th className="border border-gray-300 px-4 py-2">หอผู้ป่วย</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td className="border border-gray-300 px-4 py-2">สมรังศรี กักตัง</td>
            <td className="border border-gray-300 px-4 py-2">9284102483712321</td>
            <td className="border border-gray-300 px-4 py-2">31/07/2025</td>
            <td className="border border-gray-300 px-4 py-2">ICU</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowempU
