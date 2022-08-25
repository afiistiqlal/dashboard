import Sidebar from "../components/Sidebar/Sidebar";
import Footers from "../components/Footers/FooterAdmin";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Outlet />
        <Footers />
      </div>
    </div>
  );
}

export default Index;
