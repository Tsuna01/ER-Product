import React from 'react'

function Login() {
  return (
    <div className='container flex justify-center border-4 my-[150px] mx-auto border-grey-200 shadow-2xl w-[600px] h-[700px] rounded-3xl'>
        <div className=''>
        <h1 className='text-4xl text-red-400 font-bold mt-[50px]'>เข้าสู่ระบบ</h1>
        <img 
            src=""
            alt=""
            width={100}
            />
            
        </div>
        <form action="" className=' shadow-md w-[400px] absolute mt-65  rounded-xl p-7 h-[350px]'>
            <div className='mb-5 mt-5'>
            <label htmlFor="username" className='text-xl'>username : </label>
            <input type="text" className='ml-[10px]  border-2 border-grey-300 rounded-xl p-1' name='username' placeholder='Username'  />
            </div>
            <div>
            <label htmlFor="username" className='text-xl'>Password : </label>
            <input type="text" className='ml-[10px]  border-2 border-grey-300 rounded-xl p-1' name='password' placeholder='Password'  />
            </div>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-[40%] mt-[45px]">เข้าสู่ระบบ</button>



        </form>
        
    </div>
  )
}

export default Login
