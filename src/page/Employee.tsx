import { useState } from "react";
import { Link } from "react-router-dom";

//component
import ShowemlE from "../component/ShowemlE";
import ShowempU from "../component/ShowempU";

function Employee() {
  const [isFirstView, setIsFirstView] = useState<boolean>(true);
  const [activeForm, setActiveForm] = useState("ShowE");


  const toggleView = () => {
    setIsFirstView(prev => !prev);
  };

  const handleFormSelect = (props) => {
    setActiveForm(props);
  };

  return (
    <div className="h-screen w-screen container">
      <div className="bg-white shadow-xl flex shadow-gray-400 p-5 rounded-2xl ml-[230px] h-30 ">
        <div className="grid grid-cols-3 gap-10 items-center relative">
          {isFirstView ? (
            <>
              <div className="bg-white shadow-xl p-2 rounded-2xl">
                <button
                onClick={() => handleFormSelect('ShowE')}
                className="text-lg mx-4 hover:text-red-400 font-bold">รายงานผู้ป่วยนอก</button>
              </div>
              <div className="bg-white shadow-xl p-2 rounded-2xl">
                <button
                onClick={() => handleFormSelect('ShowU')}
                className="text-lg mx-2 hover:text-red-400 font-bold">รายงานผู้ป่วยใน</button>
              </div>

              <button
                onClick={toggleView}
                className="absolute ml-280  text-white text-lg font-bold bg-blue-500 p-2 rounded-xl cursor-pointer hover:bg-red-400"
              >
                สลับ
              </button>
            </>
          ) : (
            <>
              <div className="bg-white shadow-xl p-2 rounded-2xl">
                <Link to="/employee/D" className="text-lg mx-4 hover:text-red-400 font-bold ">แบบฟอร์มผู้ป่วยที่ได้รับการส่งตัว</Link>
              </div>
              <div className="bg-white shadow-xl p-2 rounded-2xl">
                <Link to="/employee/E" className="text-lg mx-15 hover:text-red-400 font-bold">แบบฟอร์มการนัดหมายผู้ป่วย</Link>
              </div>
              <div className="bg-white shadow-xl p-2 rounded-2xl">
                <Link to="/employee/U" className="text-lg mx-15 hover:text-red-400 font-bold">แบบฟอร์มผู้ป่วยใน</Link>
              </div>
              <button
                onClick={toggleView}
                className="absolute ml-280 text-white text-lg font-bold bg-blue-500 p-2 rounded-xl cursor-pointer hover:bg-red-400"
              >
                สลับ
              </button>
            </>
          )}
        </div>
      </div>
      <div className="ml-35 mt-10">
        {activeForm === "ShowE" && <ShowemlE />}
        {activeForm === "ShowU" && <ShowempU />}
      </div>

    </div>
  )
}

export default Employee;
