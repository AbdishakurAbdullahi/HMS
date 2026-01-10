import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BlogDetails from "./Components/BlogDetails";

import Admin from "./Pages/Dashboard";
import AppointmentForm from "./Components/AppointmentForm";
import Users from "./Pages/Admin Pages/Users";
import Appointment from "./Pages/Admin Pages/Appointment";
import Receptionist from "./Pages/Admin Pages/Users";
import CreateDoctors from "./Pages/Admin Pages/CreateDoctors";
import Doctors from "./Pages/Admin Pages/Doctors";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

const hideHeader = location.pathname.startsWith("/admin");


  // 🔐 Login check
  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") === "true");
  }, []);

  // 📦 GLOBAL APPOINTMENTS
  const [appointments, setAppointments] = useState(() => {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // ➕ Add
  const addAppointment = (data) => {
    setAppointments([...appointments, { ...data, status: "Pending" }]);
  };

  // 📦 GLOBAL DOCTORS
const [doctors, setDoctors] = useState(() => {
  return JSON.parse(localStorage.getItem("doctors")) || [];
});

useEffect(() => {
  localStorage.setItem("doctors", JSON.stringify(doctors));
}, [doctors]);

// ➕ Add Doctor
const addDoctor = (data) => {
  setDoctors([...doctors, data]);
};

// ❌ Delete Doctor
const deleteDoctor = (id) => {
  setDoctors(doctors.filter((doc) => doc.id !== id));
};


  // ✅ Approve
  const updateStatus = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item
      )
    );
  };

  // ❌ Delete
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id));
  };

  return (
    <>
      {!isLogin && <Header />}
      {/* {!hideHeader && <Header />} */}


      {/* <Header /> */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setIsLogin={setIsLogin} />} />

        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route
          path="appointmentsForm"
          element={<AppointmentForm addAppointment={addAppointment} />}
        />

        {/* Dashboard */}
        <Route path="/admin" element={<Admin setIsLogin={setIsLogin} />}>
  {/* Doctor Routes */}
  <Route
    path="createdoctor"
    element={<CreateDoctors addDoctor={addDoctor} />}
  />
  <Route
    path="doctorslist"
    element={<Doctors doctors={doctors} deleteDoctor={deleteDoctor} />}
  />

  {/* Other routes */}
  <Route
    path="appointments"
    element={
      <Appointment
        appointments={appointments}
        updateStatus={updateStatus}
        deleteAppointment={deleteAppointment}
      />
    }
  />
  <Route path="users" element={<Users />} />
  <Route path="receptionist" element={<Receptionist addAppointment={addAppointment} />} />
</Route>

      </Routes>
    </>
  );
};

export default App;
