import { Link } from "react-router-dom"
function EmployeeMenu() {
  return (
    <div className="grid grid-cols-3 gap-90 items-center">
        <div className="bg-white shadow-xl p-5 rounded-2xl ">
            <Link to="#" className="text-lg font-bold ">ข้อมูลพนักงาน</Link>
            {/* Additional content for Employee Menu can go here */}
        </div>
        <div className="bg-white shadow-xl p-5 rounded-2xl">
            <Link to="#" className="text-lg font-bold">การจัดการพนักงาน</Link>
            {/* Additional content for Employee Management can go here */}
        </div>
        <div className="bg-white shadow-xl p-5 rounded-2xl">
            <Link to="#" className="text-lg font-bold">รายงานพนักงาน</Link>
            {/* Additional content for Employee Reports can go here */}
        </div>
    </div>
  )
}

export default EmployeeMenu
