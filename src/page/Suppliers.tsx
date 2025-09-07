import { Link } from "react-router-dom"
function Subpliers() {
  return (
    <div className="container mx-auto h-200 m-1 bg-white/30 backdrop-filter backdrop-blur-md rounded-4xl flex justify-center">
        <Link to="/supplier/SupplierForm" className=" hover:w-90 hover:h-90 shadow-gray-400 mx-5 my-auto w-80 h-80 rounded-2xl bg-white flex"><span className="m-auto text-2xl">ข้อมูลผู้จัดจำหน่าย</span></Link>
        <Link to="/supplier/NumericInput" className=" hover:w-90 hover:h-90 shadow-gray-400 mx-5 my-auto w-80 h-80 rounded-2xl bg-white flex"><span className="m-auto text-2xl">ข้อมูลใบเบิก</span></Link>
    </div>
  )
}

export default Subpliers