import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className=' w-full flex shadow-md shadow-gray-400 justify-between items-center p-3 rounded-xl'>
          <nav className='flex-row'>
            <h1 className='text-3xl mx-10'>Myproduct</h1>
          </nav>
          <div className='text-xl mr-[70px]'>
            <ul className='flex '>
              <li className='mx-5'><Link to='/' className='p-2 hover:bg-red-400 hover:text-white hover:rounded-2xl' >home</Link></li>
              <li className='mx-5'><Link to='/product' className='p-2 hover:bg-red-400 hover:text-white hover:rounded-3xl'>product </Link></li>
              <li className='mx-5'> <Link to='/contact' className='p-2 hover:bg-red-400 hover:text-white hover:rounded-2xl'>contact</Link></li>
            </ul>
          </div>
      </header>
    </>
  )
}

export default Navbar
