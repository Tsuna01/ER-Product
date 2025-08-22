
function Fromdrug() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
        <div className="border-2 border-gray-200 shadow-md max-w-7xl rounded-lg p-6 w-full flex justify-between mx-auto mt-10">
            <h1 className="text-2xl font-bold">ฟอร์มการจ่ายยา</h1>
            <p className="text-sm my-auto mr-5 text-gray-500">From</p>
        </div>
        <form action="" className="mx-60 mt-10">
            <div className="w-[800px] mt-20 border-l-8 border-cyan-500 flex  ml-[80px]  ">
                <h1 className="text-3xl text-cyan-800 ml-4 font-bold my-5">แบบฟอร์มการจ่ายยา</h1>
                <div className="bg-white shadow-xl shadow-gray-400 rounded-2xl grid grid-cols-4 gap-4 h-auto p-8 absolute mt-[100px] w-[1000px]">
                    <h1 className="text-md my-[10px]" >Patient</h1>
                    <input type="text" className="input" name="patientName" />
                    <h1 className="text-md my-[10px]" >DrugID</h1>
                    <input type="date" id="date-time" className="input" name="date_time" />
                    <h1 className="text-md my-[10px]" >MedicationID</h1>
                    <input type="text" className="input" name="doctorName" />
                    <h1 className="text-md my-[10px]" >ConsultantID</h1>
                    <input type="text" className="input" name="clinicName" />
                     <h1 className="text-md my-[10px]" >UnitsPerDay</h1>
                    <input type="text" className="input" name="doctorName" />
                    <h1 className="text-md my-[10px]" >Method</h1>
                    <input type="text" className="input" name="clinicName" />
                    <h1 className="text-md my-[10px]" >StartDate</h1>
                    <input type="date" className="input" name="doctorName" />
                    <h1 className="text-md my-[10px]" >FinishDate</h1>
                    <input type="date" className="input" name="clinicName" />
                    <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center mt-10 ml-[40%] me-2 mb-2"
                    >บันทึกข้อมูล</button>
                </div>
            </div>
        </form>
    </div>
    
  )
}

export default Fromdrug
