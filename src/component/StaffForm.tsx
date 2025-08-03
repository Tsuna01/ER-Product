import React, { useState } from "react";


export default function StaffForm() {
  const [educationRows, setEducationRows] = useState([
    { degree: "", date: "1987-12-07", institution: "", other: "" },
  ]);

  const handleAddEducation = () => {
    setEducationRows([
      ...educationRows,
      { degree: "", date: "", institution: "", other: "" },
    ]);
  };
  return (
    <form className="max-w-4xl mx-auto p-8 mb-10 mt-10 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center text-cyan-700 mb-6">
        SUT HOSPITAL - แบบฟอร์มบุคลากร
      </h1>

      {/* ข้อมูลส่วนตัว */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold bg-cyan-100 p-2 rounded-t">ข้อมูลส่วนตัว</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input className="input" name="firstName" type="text"  placeholder="ชื่อ" required />
          <input className="input" name="lastName"type="text" placeholder="นามสกุล" required />
          <select className="input " name="gender">

            <option value="male" >ชาย</option>
            <option value="female" >หญิง</option>

          </select>
          <input className="input" name="dob" type="date" />
          <input className="input" name="address" type="text" placeholder="ที่อยู่" required />
          <input className="input" name="phone" type="text" placeholder="เบอร์โทรศัพท์" required />
        </div>
      </section>

      {/* ตำแหน่งงาน */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold bg-cyan-100 p-2 rounded-t">ตำแหน่งงาน</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <input className="input" name="position" type="text" placeholder="ตำแหน่งงาน" required />
          <input className="input" name="salary" type="number" placeholder="เงินเดือน" required />
          <input className="input" name="wardIds" type="number" placeholder="แผนกที่รับผิดชอบ เช่น 1,2,3" required />
        </div>
      </section>

            {/* วุฒิการศึกษา */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold bg-cyan-100 p-2 rounded-t">
          วุฒิการศึกษา
        </h2>

        {educationRows.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
          >
            <select
              className="input"
              value={row.degree}
              name={'qualification[${index}].degree'}
              onChange={(e) => {
                const newRows = [...educationRows];
                newRows[index].degree = e.target.value;
                setEducationRows(newRows);
              }}
            >
              <option value="">เลือกวุฒิการศึกษา</option>
              <option value="associate">อนุปริญญา / ปวส.</option>
              <option value="bachelor">ปริญญาตรี (ป.ตรี)</option>
              <option value="master">ปริญญาโท (ป.โท)</option>
              <option value="doctorate">ปริญญาเอก (ป.เอก)</option>
            </select>

            <input
              className="input text-amber-700"
              type="date"
              value={row.date}
              name={'qualification[${index}].date'}
              onChange={(e) => {
                const newRows = [...educationRows];
                newRows[index].date = e.target.value;
                setEducationRows(newRows);
              }}
              required
            />

            <input
              className="input"
              type="text"
              placeholder="สถาบัน"
              value={row.institution}
              name={'qualification[${index}].institution'}
              onChange={(e) => {
                const newRows = [...educationRows];
                newRows[index].institution = e.target.value;
                setEducationRows(newRows);
              }}
              required
            />

            <input
              className="input md:col-span-3"
              type="text"
              placeholder="กรณีอื่นๆ"
              value={row.other}
              name={'qualification[${index}].other'}
              onChange={(e) => {
                const newRows = [...educationRows];
                newRows[index].other = e.target.value;
                setEducationRows(newRows);
              }}
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddEducation}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          เพิ่มวุฒิการศึกษา +
        </button>
      </section>

      {/* ประสบการณ์ทำงาน */}
      <section>
        <h2 className="text-lg font-semibold bg-cyan-100 p-2 rounded-t">ประสบการณ์ทำงาน</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <input className="input" type="text" placeholder="ตำแหน่งงาน" required name="workExperience.position"/>
          <input className="input text-green-400" type="date" defaultValue="1990-01-23" required name="workExperience.startDate" />
          <input className="input text-red-400" type="date" defaultValue="1993-05-01" required name="workExperience.endDate"/>
          <input className="input md:col-span-3" type="text" placeholder="สถานที่ทำงาน" required name="workExperience.organization"/>
        </div>
      </section>

      <button type="submit" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center mt-10 ml-[40%] me-2 mb-2"

      > Submit </button>

    </form>
  );
}
