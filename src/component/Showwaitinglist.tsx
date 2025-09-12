import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Showwaitinglist() {
    const [data, setData] = useState<any[]>([]);
    const nevigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/employee/W/api')
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = data.map(d => ({
            waiting_list_id: d.waiting_list_id,   // ✅ ต้องมี
            status: d.status
        }));
        console.log('📤 payload', payload);
        await axios.put('http://localhost:3000/employee/W/update', payload);

        nevigate('/employee/U');
    };

    return (
        <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6">
            <h1 className="font-bold mb-5 text-xl text-cyan-700">ตารางผู้ป่วยรอเตียง</h1>

            {/* แนะนำให้ผูก onSubmit ที่ form */}
            <form onSubmit={handleUpdate}>
                <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                    <thead>
                        <tr className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white text-left">
                            <th className="px-6 py-3 text-sm font-semibold">Patient No.</th>
                            <th className="px-6 py-3 text-sm font-semibold">Name</th>
                            <th className="px-6 py-3 text-sm font-semibold">Ward ID</th>
                            <th className="px-6 py-3 text-sm font-semibold">Data Added</th>
                            <th className="px-6 py-3 text-sm font-semibold">Priority</th>
                            <th className="px-6 py-3 text-sm font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.map((info, idx) => (
                            <tr key={info.waiting_list_id}>
                                <td className="px-6 py-3">{info.patient_id}</td>
                                <td className="px-6 py-3">{info.name}</td>
                                <td className="px-6 py-3">{info.ward_id}</td>
                                <td className="px-6 py-3">{info.date_added}</td>
                                <td className="px-6 py-3">{info.priority_level}</td>
                                <td className="px-6 py-3">
                                    <select
                                        value={info.status ?? 'waiting'}
                                        onChange={(e) => {
                                            const newData = [...data];
                                            newData[idx] = { ...newData[idx], status: e.target.value };
                                            setData(newData);
                                        }}
                                    >
                                        <option value="waiting">waiting</option>
                                        <option value="admitted">admitted</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* ถ้าไม่ใช้ onSubmit ให้ตั้ง type="button" */}
                <div>
                    <button
                        className="flex mx-auto mt-5 rounded-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-cyan-600 to-teal-600 text-white"
                        type="submit"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Showwaitinglist