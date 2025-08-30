function ShowempW() {
    return (
        <div className=' ml-[80px] w-auto bg-white p-4 rounded-lg shadow-xl shadow-gray-400'>
            <h1 className="text-xl text-gray-400 my-[10px]">ตารางรายชื่อผู้ป่วยรอเตียง</h1>
            <table className="table-auto mt-10 border border-gray-300 w-full rounded-md">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="border border-gray-300 px-4 py-2">Patient ID.</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Ward ID.</th>
                        <th className="border border-gray-300 px-4 py-2">Date Added</th>
                        <th className="border border-gray-300 px-4 py-2">Priority</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1001</td>
                        <td className="border border-gray-300 px-4 py-2">สมศรี รีตัง</td>
                        <td className="border border-gray-300 px-4 py-2">0114</td>
                        <td className="border border-gray-300 px-4 py-2">27/04/2025</td>
                        <td className="border border-gray-300 px-4 py-2">ด่วน</td>
                        <td className="border border-gray-300 px-4 py-2">
                           <select name="" id="">
                            <option value="">อยู่ในคิวรอเตียง</option>
                            <option value="">ได้เตียงแล้ว</option>
                            <option value="">ยกเลิกรอเตียง</option>
                           </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowempW
