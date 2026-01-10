import React from "react";
import AppointmentImg from "../assets/appoinment_img.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function AppointmentForm({ addAppointment }) {
  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [sickness, setSickness] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  // 🟢 Modal state
  const [showModal, setShowModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !patientName ||
      !patientNumber ||
      !sickness ||
      !doctor ||
      !date ||
      !time
    ) {
      alert("Fadlan buuxi dhammaan fields-ka muhiimka ah");
      return;
    }

    // Prepare new appointment data
    const appointment = {
      id: Date.now(),
      patientName,
      patientNumber,
      sickness,
      doctor,
      date,
      time,
      message,
      status: "Pending",
    };

    // Show modal instead of direct submit
    setNewAppointment(appointment);
    setShowModal(true);
  };

  // 🟢 Confirm booking
  const confirmBooking = () => {
    addAppointment(newAppointment);
    setShowModal(false);
    // Reset form
    setPatientName("");
    setPatientNumber("");
    setSickness("");
    setDoctor("");
    setDate("");
    setTime("");
    setMessage("");
  };

  return (
    <>
      <section className="md:px-15 px-5 md:py-20  mb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-[rgb(23,170,247)] md:h-150 h-208 rounded-lg grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center text-white"
        >
          <div className="px-10 py-10">
            <h3 className="text-xl font-bold pb-5">Appointment</h3>
            <h2 className="md:text-5xl text-2xl font-bold">
              Apply For Free Now
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-30 mt-15 gap-y-5 mt-10">
              <input
                value={patientName}
                required
                onChange={(e) => setPatientName(e.target.value)}
                className="md:w-[300px] bg-[rgb(255,255,255)]  text-[rgba(0,0,0,0.7)]  outline-0 rounded-full h-13 px-2"
                type="text"
                name=""
                id=""
                placeholder="Patient Name*"
              />
              <input
                value={patientNumber}
                required
                onChange={(e) => setPatientNumber(e.target.value)}
                className="md:w-[300px] bg-[rgb(255,255,255)]  text-[rgba(0,0,0,0.7)]   outline-0 rounded-full h-13 px-2"
                type="tel"
                name=""
                id=""
                placeholder="Phone Number*"
              />
              <select
                value={sickness}
                onChange={(e) => setSickness(e.target.value)}
                className="md:w-[300px] bg-[rgb(255,255,255)] text-[rgba(0,0,0,0.7)]  outline-0 rounded-full h-13 px-2"
                name=""
                id=""
              >
                <option value="">Select Department*</option>
                <option value="Skin">Skin</option>
                <option value="Medicine">Medicine</option>
                <option value="Dentist">Dentist</option>
                <option value="Caring">Caring</option>
                <option value="Cancer">Cancer</option>
                <option value="Urology">Urology</option>
              </select>

              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="md:w-[300px] bg-[rgb(255,255,255)] text-[rgba(0,0,0,0.7)]  outline-0 rounded-full h-13 px-2"
                name=""
                id=""
              >
                <option value="">Select Doctor*</option>
                <option value="Dr. Ali">Dr. Smith</option>
                <option value="Dr. Farah">Dr. Farah</option>
                <option value="Dr. Azad">Dr. Azad</option>
                <option value="Dr. Brown">Dr. Brown</option>
                <option value="Dr. Davis">Dr. Davis</option>
                <option value="Dr. Mille">Dr. Mille</option>
              </select>

              <input
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
                className="md:w-[300px] bg-[rgb(255,255,255)] text-[rgba(0,0,0,0.7)]  outline-0 rounded-full h-13 px-2 uppercase"
                type="date"
                placeholder="DD/MM/YYYY"
              />

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="md:w-[300px] bg-[rgb(255,255,255)] text-[rgba(0,0,0,0.7)]  outline-0 rounded-full h-13 px-2"
                name=""
                id=""
              >
                <option value="">Select Time*</option>
                <option value="10.00 am">10.00 am</option>
                <option value="11.00 am">11.00 am </option>
                <option value="12.00 pm m">12.00 pm</option>
                <option value="1.00 pm ">1.00 pm </option>
                <option value="2.00 pm ">2.00 pm </option>
                <option value="3.00 pm ">3.00 pm </option>
              </select>
              <button
                className="md:w-[300px] bg-[rgb(29,120,226)] cursor-pointer text-white outline-0 rounded-full h-13 px-2"
                type="submit"
              >
                Book Appointment
              </button>
            </div>
          </div>
          <img
            className="md:absolute right-18 md:flex hidden top-36 h-155"
            src={AppointmentImg}
            alt=""
          />
        </form>

        {/* 🟢 MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow w-96 relative">
              <h3 className="text-xl font-bold mb-4">Confirm Your Appointments</h3>
              <p>
                <b>Patient:</b> {newAppointment.patientName}
              </p>
              <p>
                <b>Phone:</b> {newAppointment.patientNumber}
              </p>
              <p>
                <b>Sickness:</b> {newAppointment.sickness}
              </p>
              <p>
                <b>Doctor:</b> {newAppointment.doctor}
              </p>
              <p>
                <b>Date:</b> {newAppointment.date}
              </p>
              <p>
                <b>Time:</b> {newAppointment.time}
              </p>
              {newAppointment.message && (
                <p>
                  <b>Message:</b> {newAppointment.message}
                </p>
              )}

              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Confirm
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
              >
                X
              </button>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default AppointmentForm;
