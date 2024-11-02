import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';

// Fetch the doctor's schedule
export const fetchDoctorSchedule = async (doctorId) => {
  const scheduleCollection = collection(db, 'doctors', doctorId, 'schedule');
  const scheduleSnapshot = await getDocs(scheduleCollection);
  return scheduleSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Book an appointment
export const bookAppointment = async (appointmentData) => {
  const appointmentCollection = collection(db, 'appointments');
  const newAppointment = await addDoc(appointmentCollection, appointmentData);
  return newAppointment.id; // Return the ID of the new appointment
};

// Cancel an appointment
export const cancelAppointment = async (appointmentId) => {
  const appointmentDoc = doc(db, 'appointments', appointmentId);
  await deleteDoc(appointmentDoc);
};
