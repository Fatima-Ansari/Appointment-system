// src/pages/Help.js
import React from 'react';

function Help() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Help & FAQ</h1>
      <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
      <div className="mb-4">
        <h3 className="font-bold">1. How do I book an appointment?</h3>
        <p className="text-gray-600">
          To book an appointment, navigate to the Patient Dashboard, select a doctor, and choose a suitable
          date and time from the available slots.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">2. Can I cancel my appointment?</h3>
        <p className="text-gray-600">
          Yes, you can cancel your appointment from the My Appointments section on the Patient Dashboard.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">3. How do I contact support?</h3>
        <p className="text-gray-600">
          For support, please reach out to us via email at contact@example.com. We are here to help you!
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold">4. Is my personal information secure?</h3>
        <p className="text-gray-600">
          Yes, we prioritize your privacy and security. Your personal information is protected and not shared
          without your consent.
        </p>
      </div>
    </div>
  );
}

export default Help;
