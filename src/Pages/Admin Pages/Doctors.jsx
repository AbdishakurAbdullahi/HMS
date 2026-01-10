import React from "react";

const Doctors = ({ doctors, deleteDoctor }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Doctors</h1>

      <div className="overflow-x-auto">
        <table className="w-full border text-ms">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">Full Name</th>
              <th className="border p-2">Gender</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Specialization</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No doctors found
                </td>
              </tr>
            ) : (
              doctors.map((doc, index) => (
                <tr key={doc.id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{doc.fullName}</td>
                  <td className="border p-2">{doc.gender}</td>
                  <td className="border p-2">{doc.email}</td>
                  <td className="border p-2">{doc.specialization}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => deleteDoctor(doc.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Doctors;
