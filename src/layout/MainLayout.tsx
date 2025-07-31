import { Outlet } from "react-router-dom";
import SidebarMenu from "../component/SidebarMenu";
import Navbar from "../component/Navbar";

function MainLayout() {
  return (

    <div className="flex h-auto bg-gray-100">
      <SidebarMenu />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="bg-customLG w-full flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
