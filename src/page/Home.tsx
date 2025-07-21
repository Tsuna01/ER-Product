//Component
import ContactCP from "./../component/ContactCP";

function Home() {
  return (
    <div className='container p-10 mt-[50px] ml-[30px]'>
      <div className="flex justify-start items-center">

        <img 
        src="https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&fit=crop&ar=16%3A9&crop=faces" 
        alt=""
        width={720}
        className=" rounded-3xl"
        />
        <div className="m-10  p-5 max-w-[1200] mt-[-90px]" >
          <p className="text-2xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi placeat atque perferendis molestias tenetur eveniet porro fugit, beatae voluptatibus asperiores distinctio perspiciatis tempora nihil laudantium. Ratione eum sint cum itaque nulla sunt suscipit impedit ex nemo laudantium quis dolores inventore maiores natus ipsum consequatur iure magnam, alias culpa et optio?
          </p>
          <button 

          type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800
           font-medium rounded-lg text-md px-5 py-2.5 text-center
            me-2 mb-2 absolute mt-[100px] "
          >
            รายละเอียด
          </button>
        </div>

      </div>
      <ContactCP/>

    </div>
  )
}

export default Home
