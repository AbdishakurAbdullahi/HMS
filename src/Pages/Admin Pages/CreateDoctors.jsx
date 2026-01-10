import { useState } from "react";

function CreateDoctors({ addDoctor }) {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    email: "",
    specialization: "",
  });

  const submit = () => {
    if (!form.fullName || !form.gender || !form.email || !form.specialization) {
      alert("Please fill all fields");
      return;
    }

    addDoctor({ ...form, id: Date.now() });
    alert("Doctor Added");
    setForm({ fullName: "", gender: "", email: "", specialization: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Doctor Registration</h2>

      <input
        type="text"
        required
        placeholder="Full Name"
        value={form.fullName}
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />

      <select
        value={form.gender}
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="email"
        required
        placeholder="Email"
        value={form.email}
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="text"
        required
        placeholder="Specialization"
        value={form.specialization}
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, specialization: e.target.value })}
      />

      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Doctor
      </button>
    </div>
  );
}

export default CreateDoctors;
