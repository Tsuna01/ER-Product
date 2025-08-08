import React, { useState } from 'react';

const Test: React.FC = () => {
  const [isFirstView, setIsFirstView] = useState<boolean>(true);

  const toggleView = () => {
    setIsFirstView(prev => !prev);
  };

  return (
    <div className="p-6">
      {/* ปุ่มกด */}
      <button
        onClick={toggleView}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔁 สลับหน้าจอ
      </button>

      {/* กล่องข้อมูล */}
      <div className="p-6 border rounded-lg bg-gray-100 text-xl font-semibold text-gray-800 shadow">
        {isFirstView ? (
          <div>📋 หน้าจอ A: รายการข้อมูล</div>
        ) : (
          <div>📄 หน้าจอ B: แบบฟอร์มข้อมูล</div>
        )}
      </div>
    </div>
  );
};

export default Test;
