import { Link } from "react-router-dom"
function Medication() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white shadow-md max-w-7xl  rounded-lg p-6 w-full flex justify-between mx-auto mt-10">
        <h1 className="text-2xl font-bold">การจ่ายยา</h1>
        <div>
            <Link to='/medications/from' className="mr-10 bg-blue-400 rounded-xl p-2 text-white hover:bg-green-500" >ฟอร์มการจ่ายยา</Link>
            <input type="text" className="input " placeholder="ค้นหา" />
        </div>
      </div>
      <table className="table-auto shadow-2xl mx-70 mt-10 border border-gray-300 ">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Medication ID.</th>
            <th className="border border-gray-300 px-4 py-2">Patient ID.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Units Per Day</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Prescribed By</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>

          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td className="border border-gray-300 px-4 py-2">1001</td>
            <td className="border border-gray-300 px-4 py-2">P10901</td>
            <td className="border border-gray-300 px-4 py-2">สมศรี รีตัง</td>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">1/02/2023</td>
            <td className="border border-gray-300 px-4 py-2">28/02/2023</td>
            <td className="border border-gray-300 px-4 py-2">สมชาย ใจดี</td>
            <td className="border border-gray-300 px-4 py-2"><Link to='#' className='text-black bg-green-500 p-[5px] rounded-lg hover:bg-red-600 hover:text-blue-800'>รายละเอียด</Link></td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Medication
