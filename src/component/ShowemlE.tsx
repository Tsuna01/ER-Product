function ShowemlE() {
  return (
    <div className="ml-[80px] bg-white shadow-xl shadow-gray-400 absolute mt-[30px] w-[1000px] rounded-2xl h-auto p-8">
      <table className="table-auto w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">ชื่อ - นามสกุล</th>
            <th className="border border-gray-300 px-4 py-2">เลขบัตรประชาชน</th>
            <th className="border border-gray-300 px-4 py-2">วันที่ส่งตัว</th>
            <th className="border border-gray-300 px-4 py-2">แผนก</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td className="border border-gray-300 px-4 py-2">สมชาย ใจดี</td>
            <td className="border border-gray-300 px-4 py-2">1234567890123</td>
            <td className="border border-gray-300 px-4 py-2">31/07/2025</td>
            <td className="border border-gray-300 px-4 py-2">ทั่วไป</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowemlE;
