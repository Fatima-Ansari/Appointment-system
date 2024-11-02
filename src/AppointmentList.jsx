// AppointmentList.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path as needed

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'appointments'));
        const appointmentData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(appointmentData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading appointments...</div>;
  }

  if (error) {
    return <div>Error fetching appointments: {error}</div>;
  }

  return (
    <div>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.title} - {appointment.date} - {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
