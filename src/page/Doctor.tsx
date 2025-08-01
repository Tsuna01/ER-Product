//component
import DoctorCard from "../component/DoctorCard";


function Doctor() {
  return (
    <div className="h-screen w-screen container">
            <div className="bg-white shadow-xl flex shadow-gray-400 p-5 rounded-2xl ml-[230px] h-30 ">
                <div className="flex items-center justify-between">
                    <div className="items-center text-2xl ml-10  font-bold text-cyan-800">
                        <h1>รายชื่อบุคคลากรทางการแพทย์</h1>
                    </div>
                    <div className="ml-130 border-blue-200 border-2 rounded-lg">
                        <input type="text" className="input" />
                        <button className=" absolute text-white text-lg bg-blue-500 p-2 ml-5 rounded-xl cursor-pointer hover:bg-red-400 ">Search</button>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-xl grid grid-cols-4 gap-25 shadow-gray-400 p-5 rounded-2xl mt-10 ml-[230px] h-auto">
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />

            </div>
        </div>
  )
}

export default Doctor
