import { Outlet } from "react-router-dom";
import SidebarMenu from "../component/SidebarMenu";
import Navbar from "../component/Navbar";

function MainLayout() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <SidebarMenu />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 bg-customLG w-full p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
