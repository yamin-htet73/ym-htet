import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
