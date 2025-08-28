
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
        </select><br />
        <h1 className="bold mb-5 text-lg text-gray-400 ">ตารางผู้ป่วยที่อยู่ในวอร์ด</h1>
      <table className="table-auto w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Patient No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Data Placed</th>
            <th className="border border-gray-300 px-4 py-2">Expected Leave</th>
            <th className="border border-gray-300 px-4 py-2">Bed No.</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td className="border border-gray-300 px-4 py-2">P1002</td>
            <td className="border border-gray-300 px-4 py-2">สมชาย ใจดี</td>
            <td className="border border-gray-300 px-4 py-2">31/07/2025</td>
            <td className="border border-gray-300 px-4 py-2">31/08/2025</td>
            <td className="border border-gray-300 px-4 py-2">80</td>
          </tr>
        </tbody>
      </table>
              <h1 className="bold mb-5 mt-10 text-lg text-gray-400 ">ตารางผู้ป่วยที่รอเตียง</h1>
      <table className="table-auto w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Patient No.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Data Placed</th>
            <th className="border border-gray-300 px-4 py-2">Expected Leave</th>
            <th className="border border-gray-300 px-4 py-2">Bed No.</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td className="border border-gray-300 px-4 py-2">P1002</td>
            <td className="border border-gray-300 px-4 py-2">สมชาย ใจดี</td>
            <td className="border border-gray-300 px-4 py-2">31/08/2025</td>
            <td className="border border-gray-300 px-4 py-2">31/09/2025</td>
            <td className="border border-gray-300 px-4 py-2">80</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ShowempU
