import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

function DoctorDashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctorCollection = collection(db, 'doctors');
      const doctorSnapshot = await getDocs(doctorCollection);
      const doctorList = doctorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDoctors(doctorList);
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Doctors List</h1>
      <ul>
        {doctors.map(doctor => (
          <li key={doctor.id} className="bg-white p-4 rounded-md shadow my-2">
            <h2 className="text-lg font-semibold">{doctor.name}</h2>
            <p>Specialization: {doctor.specialization}</p>
            <p>Contact: {doctor.contactInfo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;
