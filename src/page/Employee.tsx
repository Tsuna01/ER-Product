//component
import EmployeeMenu from "../component/EmployeeMenu"
function Employee() {
  return (
    <div className="h-screen w-screen container">
        <div className="bg-white shadow-xl flex shadow-gray-400 p-5 rounded-2xl ml-[230px] h-30 ">
            <EmployeeMenu />
        </div>
      
    </div>
  )
}

export default Employee
