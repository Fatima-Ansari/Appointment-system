import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path as necessary

function PatientDashboard() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Fetch patients and appointments on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      const patientCollectionRef = collection(db, "patients");
      const data = await getDocs(patientCollectionRef);
      setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const fetchAppointments = async () => {
      const appointmentCollectionRef = collection(db, "appointments");
      const data = await getDocs(appointmentCollectionRef);
      setAppointments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchPatients();
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Patient Dashboard
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {patient.name}
            </h2>
            <p className="text-gray-600">Contact: {patient.contactDetails}</p>
            <p className="text-gray-600 mb-4">
              Medical History: {patient.medicalHistory}
            </p>

            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => handleAppointment(patient.id)}
            >
              Book Appointment
            </button>

            {/* Show the appointments for this patient */}
            <h3 className="text-xl font-semibold mt-4">Appointments</h3>
            <ul className="mt-2">
              {appointments
                .filter(appointment => appointment.patientId === patient.id) // Assuming appointment has patientId
                .map(appointment => (
                  <li key={appointment.id} className="text-gray-600">
                    {appointment.date} - {appointment.time} - {appointment.status}
                  </li>
                ))}
              {appointments.filter(appointment => appointment.patientId === patient.id).length === 0 && (
                <li className="text-gray-500">No appointments scheduled.</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientDashboard;
