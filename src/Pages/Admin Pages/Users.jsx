import { useState } from "react";

function Receptionist({ addAppointment }) {
  const [form, setForm] = useState({
    patientName: "",
    patientNumber: "",
    sickness: "",
    doctor: "",
    date: "",
    time: "",
    message: ""
  });

  const submit = () => {
    addAppointment({ ...form, id: Date.now() });
    alert("Appointment Added");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Receptionist</h2>

      {Object.keys(form).map(key => (
        <input
        
          key={key}
          required
          placeholder={key}
          className="border p-2 w-full mb-2"
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default Receptionist;
