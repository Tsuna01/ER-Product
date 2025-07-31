//component
import ShowempU from "./ShowempU"

function EmployeeU() {
  return (
            <div className="h-[1500px] w-screen container">
            <div className="w-[800px] mt-20 border-l-8 border-cyan-500 flex  ml-[80px]">
                <h1 className="text-3xl text-cyan-800 ml-4 font-bold my-5">แบบฟอร์มผู้ป่วยเข้าห้องเฉพาะ</h1>
                <form action="" className="bg-white shadow-xl shadow-gray-400 rounded-2xl h-auto p-8 absolute mt-[100px] w-[1000px]">
                    <h1 className="text-md my-[10px]" >ชื่อ - นามสกุลผู้ป่วย</h1>
                    <input type="text" className="input" name="nameEM" />
                    <h1 className="text-md my-[10px]" >เลขบัตรประชาชน</h1>
                    <input type="text" className="input" name="Emp_ID" />
                    <h1 className="text-md my-[10px]" >วันที่เข้า</h1>
                    <input type="date" className="input" name="date_time" />
                    <h1 className="text-md my-[10px]" >ชื่อหอผู้ป่วย</h1>
                    <input type="text" className="input" name="#" />
                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center mt-10 me-2 mb-2"
                    >บันทึกข้อมูล</button>
                    
                </form>
                
            </div>
            <div className="mt-[670px] border-l-8 border-cyan-500 flex ml-[80px]">
                <h1 className="text-3xl text-cyan-800 ml-4 font-bold">รายงานผู้ป่วยคลินิกนอก</h1>
            </div>
            <ShowempU/>
        </div>
  )
}

export default EmployeeU
