import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "block p-3 rounded bg-blue-600"
      : "block p-3 rounded hover:bg-gray-700";

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
        Hospital HMS
      </h1>

      <nav className="p-4 space-y-2">
        <NavLink to="/admin" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          Receptionist
        </NavLink>

        {/* ✅ Separated links */}
        <NavLink to="/admin/createdoctor" className={linkClass}>
          Create Doctor
        </NavLink>

        <NavLink to="/admin/doctorslist" className={linkClass}>
          Doctors List
        </NavLink>

        <NavLink to="/admin/appointments" className={linkClass}>
          Appointments
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
