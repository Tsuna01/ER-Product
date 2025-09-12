import { useState } from "react";
import { Link } from "react-router-dom";
//component
import DoctorCard from "../component/DoctorCard";


function Doctor() {
    const [isFirstView, setIsFirstView] = useState<boolean>(true);

    const toggleView = () => {
        setIsFirstView(prev => !prev);
    };


    return (
        <div className="h-screen w-screen container">
            <div className="bg-white shadow-xl flex shadow-gray-400 p-5 rounded-2xl ml-[230px] h-30 ">
                {isFirstView ? (
                    <div className="flex items-center justify-between">
                        <div className="items-center text-2xl ml-10  font-bold text-cyan-800">
                            <h1>รายชื่อบุคคลากรทางการแพทย์</h1>
                        </div>
                        <div className="ml-185 mb-10 border-blue-200 border-2 rounded-lg">
                            <button
                                onClick={toggleView}
                                className=" absolute text-white font-bold text-lg bg-blue-500 p-2 ml-25 rounded-xl cursor-pointer hover:bg-green-500 
                            ">สลับหน้า</button>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                        <div className="items-center text-2xl ml-10  font-bold text-cyan-800">
                            <h1>รายชื่อบุคคลากรทางการแพทย์</h1>
                        </div>
                        <div className="ml-130 rounded-lg">
                            <Link to='/doctor/StaffForm' className='mr-5 p-2 hover:p-3 mt-[-20px] bg-white absolute rounded-lg shadow-xl shadow-gray-200 font-bold  hover:bg-blue-500 hover:text-white '>
                            <span className="">Staff Form</span>
                            </Link>
                            <Link to='/doctor/WardForm' className='mr-5 p-2 hover:p-3 ml-35 mt-[-20px] bg-white absolute  rounded-lg shadow-xl shadow-gray-200 font-bold  hover:bg-blue-500 hover:text-white'>
                            <span className="">Staff Assign</span>
                            </Link>
                            <button
                                onClick={toggleView}
                                className=" absolute text-white text-lg font-bold bg-blue-500 p-2 ml-85 mt-[-20px] rounded-xl cursor-pointer hover:bg-red-400 
                            ">สลับ</button>
                        </div>
                    </div>
                )}

            </div>
            <div className="ml-60 mt-10 bg-white shadow-xl rounded-2xl shadow-gray-400 p-5">
                <DoctorCard/>
            </div>
        </div>
    )
}

export default Doctor
