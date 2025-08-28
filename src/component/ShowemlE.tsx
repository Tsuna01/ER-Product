import {Link} from 'react-router-dom';
function ShowemlE() {
  return (
    <div className="bg-white shadow-xl shadow-gray-400 rounded-xl ml-24 p-10">
      <h1 className="text-xl text-gray-400 my-[10px]">ตารางผู้ป่วยนอก</h1>
      <table className="table-auto mt-10 border border-gray-300 w-full rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Patient ID.</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Clinic_No</th>
            <th className="border border-gray-300 px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <td className="border border-gray-300 px-4 py-2">1001</td>
            <td className="border border-gray-300 px-4 py-2">สมศรี รีตัง</td>
            <td className="border border-gray-300 px-4 py-2">0881234567</td>
            <td className="border border-gray-300 px-4 py-2">2104</td>
            <td className="border border-gray-300 px-4 py-2"><Link to='#' className='text-black bg-green-500 p-[5px] rounded-lg hover:bg-red-600 hover:text-blue-800'>รายละเอียด</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowemlE;
