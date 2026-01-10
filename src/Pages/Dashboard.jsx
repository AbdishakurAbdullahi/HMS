import Sidebar from "../Components/Sidebar";
import AdminHeader from "../Components/AdminHeader";
import Card from "../Components/Card";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = ({ setIsLogin }) => {
  const navigate = useNavigate();

  // 🔹 Load data from localStorage
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const receptionists = JSON.parse(localStorage.getItem("receptionists")) || [];

  // 🔐 Logout
  const logout = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
    navigate("/");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full min-h-screen bg-gray-100">
        <AdminHeader />

        <div className="p-6">
          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <Card
              title="Total Appointments"
              value={appointments.length}
              color="bg-blue-600"
            />
            <Card
              title="Approved"
              value={appointments.filter(a => a.status === "Approved").length}
              color="bg-green-600"
            />
            <Card
              title="Pending"
              value={appointments.filter(a => a.status === "Pending").length}
              color="bg-yellow-500"
            />
            <Card
              title="Doctors"
              value={doctors.length}
              color="bg-purple-600"
            />
  
          </div>

          {/* NESTED PAGES */}
          <div className="bg-white p-6 rounded shadow mb-6">
            <Outlet />
          </div>

          {/* LOGOUT BUTTON */}
          <button
            onClick={logout}
            className="mt-6 bg-red-500 text-white px-6 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
