import { Link, useParams } from "react-router-dom"
function Infostaff() {
    const { id } = useParams();
    console.log("ID:", id);
  return (
    <div className="container m-[80px]  p-4">
      <div className="border-2 border-black ml-[60px] bg-gray-300 p-4 rounded-lg shadow-xl shadow-gray-400 flex ">
        <div className="border-2 border-gray-300 p-4">
            <div className="">
                <h1 className="text-2xl font-bold mb-2">ข้อมูลบุคลากรทางการแพทย์</h1>
                <p className="text-gray-700 mb-2">ID: {id}</p>
                <p className="text-gray-700 mb-2">ชื่อ: ชื่อจริง นามสกุล</p>
                <p className="text-gray-700 mb-2">ตำแหน่ง: ตำแหน่งงาน</p>
                <p className="text-gray-700 mb-2">แผนก: แผนกที่ทำงาน</p>
            </div>
        </div>
        <div>
            <div className="border-2 text-xl border-gray-300 p-2 ml-[40px] ">
                <h1 className="text-2xl font-bold mb-10 "> ประวัติ ชื่อจริง นามสกุล</h1>
                <p className="text-gray-700 mb-5 flex-row">ประวัติการศึกษา: Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque asperiores tempora voluptatem eos perspiciatis sapiente, doloribus earum ut, provident voluptatum. Assumenda quaerat nobis et, iure corporis consequatur magni ad eos quo nulla molestiae culpa eveniet vel harum? Sequi numquam vitae saepe officiis explicabo nostrum praesentium libero totam velit voluptatem.</p>
                <p className="text-gray-700 mb-3 flex-row">ประวัติการทำงาน: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt quis voluptatum consectetur debitis id voluptatem atque ex est vel!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Infostaff
