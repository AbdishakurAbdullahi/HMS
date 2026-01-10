import React from 'react'

const Appointment = ({ appointments, updateStatus, deleteAppointment }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      <div className="overflow-x-auto">
        <table className="w-full border text-ms">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">Patient</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Sickness</th>
              <th className="border p-2">Doctor</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center p-4">No appointments found</td>
              </tr>
            ) : (
              appointments.map((item, index) => (
                <tr key={item.id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.patientName}</td>
                  <td className="border p-2">{item.patientNumber}</td>
                  <td className="border p-2">{item.sickness}</td>
                  <td className="border p-2">{item.doctor}</td>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2">{item.time}</td>
                  <td className="border p-2">{item.message || '-'}</td>

                  <td className="border p-2">
                    {item.status === "Pending" ? (
                      <span className="bg-yellow-200 px-2 py-1 rounded">Pending</span>
                    ) : (
                      <span className="bg-green-200 px-2 py-1 rounded">Approved</span>
                    )}
                  </td>

                  <td className="border p-2 space-x-2">
                    {item.status === "Pending" && (
                      <button
                        onClick={() => updateStatus(item.id, "Approved")}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => deleteAppointment(item.id)}
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
  )
}

export default Appointment
