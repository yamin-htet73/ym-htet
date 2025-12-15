const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h1 className="text-xl font-bold mb-8">My App</h1>

      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Tasks</li>
        <li className="hover:text-blue-400 cursor-pointer">Profile</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
