import { useState, useEffect } from "react";
import axios from "axios";

type Row = {
  patient_id: number;
  name: string;
  date_admitted: string;
  expected_dis_date: string | null;
  bed_id: number;
  ward_id: number;
  ward_name: string;
};

function ShowempU() {
  const [data, setData] = useState<Row[]>([]);
  const [wardId, setWardId] = useState<string>("0");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const fetchByWard = async (wid: string) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await axios.get("http://localhost:3000/employee/U/api", {
        params: { ward_id: wid, current: 1 }, // current=1 = ยังไม่จำหน่าย
      });
      setData(res.data);
    } catch (e: any) {
      setErr(e?.message || "โหลดข้อมูลล้มเหลว");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // โหลดครั้งแรกด้วยวอร์ด 1
  useEffect(() => {
    fetchByWard(wardId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // เมื่อเลือกวอร์ดใหม่ → ยิงค้นหา
  const onChangeWard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wid = e.target.value;
    setWardId(wid);
    fetchByWard(wid);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6">
      <h1 className="font-bold mb-5 text-xl text-cyan-700">เลือกหอผู้ป่วย</h1>

      <select
        name="ward_id"
        className="input mb-10"
        value={wardId}
        onChange={onChangeWard}
      >
        <option value="0">ALL</option>
        <option value="1">หอ 1</option>
        <option value="2">หอ 2</option>
        <option value="3">หอ 3</option>
        <option value="4">หอ 4</option>
        <option value="5">หอ 5</option>
        <option value="6">หอ 6</option>
        <option value="7">หอ 7</option>
        <option value="8">หอ 8</option>
        <option value="9">หอ 9</option>
        <option value="10">หอ 10</option>
        <option value="11">หอ 11</option>
        <option value="12">หอ 12</option>
        <option value="13">หอ 13</option>
        <option value="14">หอ 14</option>
        <option value="15">หอ 15</option>
        <option value="16">หอ 16</option>
        <option value="17">หอ 17</option>
      </select>


      <h1 className="font-bold mb-5 text-xl text-cyan-700">
        ตารางผู้ป่วยที่อยู่ในวอร์ด
      </h1>

      {err && <div className="text-red-600 mb-3">⚠️ {err}</div>}
      {loading && <div className="mb-3">กำลังโหลด...</div>}

      <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
            <th className="px-6 py-3 text-sm font-semibold">Patient No.</th>
            <th className="px-6 py-3 text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-sm font-semibold">Date Placed</th>
            <th className="px-6 py-3 text-sm font-semibold">Expected Leave</th>
            <th className="px-6 py-3 text-sm font-semibold">Bed No.</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((info) => (
            <tr key={info.patient_id} className="hover:bg-gray-50 even:bg-gray-50/50 transition">
              <td className="px-6 py-3 text-gray-700">{info.patient_id}</td>
              <td className="px-6 py-3 text-gray-700">{info.name}</td>
              <td className="px-6 py-3 text-gray-700">
                {info.date_admitted
                  ? new Date(info.date_admitted).toLocaleString("th-TH")
                  : "-"}
              </td>
              <td className="px-6 py-3 text-gray-700">
                {info.expected_dis_date
                  ? new Date(info.expected_dis_date).toLocaleDateString("th-TH")
                  : "-"}
              </td>
              <td className="px-6 py-3 text-gray-700">{info.bed_id}</td>
            </tr>
          ))}

          {data.length === 0 && !loading && (
            <tr>
              <td colSpan={5} className="px-6 py-6 text-center text-gray-500">
                ไม่พบข้อมูล
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowempU;
