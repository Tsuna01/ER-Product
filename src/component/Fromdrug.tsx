function Fromdrug() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="border-b border-gray-300 rounded-2xl mx-40 mt-5 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-700">ฟอร์มการจ่ายยา</h1>
          <p className="text-sm text-gray-500">ระบบบันทึกข้อมูลยา</p>
        </div>
      </div>

      {/* Form */}
      <form className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-10">
        <h2 className="text-2xl font-semibold text-cyan-600 border-l-4 border-cyan-500 pl-3 mb-8">
          ข้อมูลการจ่ายยา
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Patient</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              name="patient_id"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">DrugID</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              name="item_id"
            />
          </div>
        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prescribed By</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              name="prescribed_by"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Units Per Day</label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              name="units_per_day"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              name="start_date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
              name="end_date"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-md transition-all duration-200"
          >
            💊 บันทึกข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
}

export default Fromdrug;
