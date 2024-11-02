import React from 'react';

function About() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">About Us</h1>
      <p className="mb-4 text-gray-600">
        Welcome to the Doctor Appointment System! Our goal is to streamline the process of scheduling
        and managing doctor appointments to enhance the patient experience and optimize healthcare services.
      </p>
      <p className="mb-4 text-gray-600">
        We provide a user-friendly interface for both patients and doctors, allowing seamless interaction
        and management of appointments. Patients can easily view available doctors, book appointments,
        and manage their schedules. Doctors can manage their schedules, view patient details, and handle
        appointments efficiently.
      </p>
      <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4 text-gray-600">
        Our mission is to improve healthcare accessibility and efficiency through technology, ensuring that
        both patients and healthcare providers can easily manage their interactions.
      </p>
      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="text-gray-600">For any inquiries, please reach out to us at: contact@example.com</p>
    </div>
  );
}

export default About;
