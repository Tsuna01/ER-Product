// import Image from "next/image";
// import Contact from "./component/Contact";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container mx-auto mt-[50px] p-6 border-4 border-blue-900 border-solid shadow-2xl rounded-lg bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6 space-y-4">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Medical
              </span>
              <br />
              <span className="text-4xl text-gray-700">Equipment</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              อุปกรณ์การแพทย์คุณภาพสูงสำหรับโรงพยาบาลและคลินิกสมัยใหม่ 
              ด้วยเทคโนโลยีล้ำสมัยและมาตรฐานสากล เพื่อการดูแลสุขภาพที่ดีที่สุดสำหรับผู้ป่วย
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                ดูสินค้า
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                ติดต่อเรา
              </button>
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-blue-600 to-teal-700 rounded-lg overflow-hidden shadow-xl h-80">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <p className="text-lg font-semibold">เครื่องมือการแพทย์</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="container mx-auto mt-16 p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">หมวดหมู่สินค้า</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เครื่องมือการแพทย์ครบครันสำหรับทุกความต้องการของสถานพยาบาล
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">เครื่องมือวัดสัญญาณชีพ</h3>
            <p className="text-gray-600">
              เครื่องวัดความดันโลหิต, เครื่องวัดอุณหภูมิ, เครื่องวัดชีพจร และอื่นๆ
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">เครื่องมือการผ่าตัด</h3>
            <p className="text-gray-600">
              อุปกรณ์การผ่าตัดที่ได้มาตรฐาน สำหรับการรักษาที่ปลอดภัยและมีประสิทธิภาพ
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">เครื่องมือวิเคราะห์</h3>
            <p className="text-gray-600">
              เครื่องมือตรวจวิเคราะห์ทางการแพทย์ เพื่อการวินิจฉัยที่แม่นยำ
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ทำไมต้องเลือกเรา</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เหตุผลที่โรงพยาบาลและคลินิกชั้นนำเลือกใช้เครื่องมือการแพทย์จากเรา
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">มาตรฐาน FDA</h3>
              <p className="text-gray-600 text-sm">ได้รับการรับรองมาตรฐานจาก FDA และ CE</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">บริการ 24/7</h3>
              <p className="text-gray-600 text-sm">ทีมเทคนิคพร้อมให้บริการตลอด 24 ชั่วโมง</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">จัดส่งเร็ว</h3>
              <p className="text-gray-600 text-sm">จัดส่งภายใน 24-48 ชั่วโมง ทั่วประเทศ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">รับประกัน</h3>
              <p className="text-gray-600 text-sm">รับประกันคุณภาพสินค้า 1-3 ปี</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto mt-16 p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">สินค้าแนะนำ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เครื่องมือการแพทย์ที่ได้รับความนิยมสูงสุดจากลูกค้าของเรา
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">เครื่องวัดความดันโลหิตดิจิทัล</h3>
              <p className="text-gray-600 mb-4">เครื่องวัดความดันโลหิตอัตโนมัติ ความแม่นยำสูง</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">฿2,500</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">เครื่องมือตรวจหู คอ จมูก</h3>
              <p className="text-gray-600 mb-4">ชุดตรวจหูคอจมูก พร้อมหลอดไฟ LED</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">฿3,800</span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">เครื่องวัดอุณหภูมิอินฟราเรด</h3>
              <p className="text-gray-600 mb-4">เครื่องวัดอุณหภูมิแบบไม่สัมผัส ผลลัพธ์ภายใน 1 วินาที</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">฿1,200</span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  สั่งซื้อ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-white py-16 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative bg-gradient-to-br from-teal-200 to-blue-300 rounded-lg h-80 overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-teal-800 text-center">
                  <div className="w-24 h-24 bg-white bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">ทีมงานผู้เชี่ยวชาญ</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">เกี่ยวกับเรา</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                เราเป็นผู้นำในการจัดจำหน่ายเครื่องมือการแพทย์คุณภาพสูง มีประสบการณ์มากกว่า 15 ปี 
                ในการให้บริการโรงพยาบาล คลินิก และสถานพยาบาลทั่วประเทศ
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ด้วยทีมงานผู้เชี่ยวชาญและเครือข่ายพันธมิตรระดับโลก เรามั่นใจว่าจะมอบเครื่องมือการแพทย์
                ที่มีคุณภาพและบริการหลังการขายที่ดีที่สุดให้กับลูกค้าทุกท่าน
              </p>
              <div className="flex space-x-4">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                  เรียนรู้เพิ่มเติม
                </button>
                <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
                  ดูผลงาน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;