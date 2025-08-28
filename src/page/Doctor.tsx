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
                        <div className="ml-130 border-blue-200 border-2 rounded-lg">
                            <input type="text" className="input" />
                            <button className=" absolute text-white text-lg bg-blue-500 p-2 ml-5 rounded-xl cursor-pointer hover:bg-green-500 ">Search</button>
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
                            <Link to='/doctor/StaffForm' className='mr-5 p-2 border-white shadow-xl rounded-2xl hover:bg-green-500 hover:text-white hover:border-green-300'>
                            <span className="">StaffForm</span>
                            </Link>
                            <Link to='/doctor/WardForm' className='mr-5 p-2 border-white shadow-xl rounded-2xl hover:bg-green-500 hover:text-white hover:border-green-300'>
                            <span className="">WardForm</span>
                            </Link>
                            <button
                                onClick={toggleView}
                                className=" absolute text-white text-lg font-bold bg-blue-500 p-2 ml-30 mt-[-10px] rounded-xl cursor-pointer hover:bg-red-400 
                            ">สลับ</button>
                        </div>
                    </div>
                )}

            </div>
            <div className="bg-white shadow-xl grid grid-cols-4 gap-25 shadow-gray-400 p-5 rounded-2xl mt-10 ml-[230px] h-auto">
                <DoctorCard/>
            </div>
        </div>
    )
}

export default Doctor
