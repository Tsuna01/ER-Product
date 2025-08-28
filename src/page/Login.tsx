

export default function Login() {


  return (
     <div className='bg-customLG bg-cover bg-center w-full h-screen'>
      <div className='container backdrop-blur-md flex justify-center my-[180px] absolute mx-[38%] border-grey-200 shadow-2xl w-[400px] h-[500px] rounded-3xl'>
        <div className=''>
          <h1 className='text-4xl text-amber-500 font-bold mt-[50px]'>เข้าสู่ระบบ</h1>
        </div>
        <form action="" className=' w-[400px] absolute mt-30  rounded-xl p-7 h-[350px]'>
          <div className='mb-5 mt-5'>
            <label htmlFor="username" className='text-xl'>username : </label>
            <input type="text" className='ml-[10px]  border-2 border-grey-300 rounded-xl p-1' name='username' placeholder='Username' />
          </div>
          <div>
            <label htmlFor="username" className='text-xl'>Password : </label>
            <input type="text" className='ml-[10px]  border-2 border-grey-300 rounded-xl p-1' name='password' placeholder='Password' />
          </div>
          <button type="submit"  className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-[40%] mt-[45px]">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
}
