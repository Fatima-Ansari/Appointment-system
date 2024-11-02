import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-green-700 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Appointment System</h1>
        <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
          <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
          <Link to="/patient-dashboard" onClick={toggleMenu} className="hover:underline">PatientDashboard</Link>
          <Link to="/doctor-dashboard" onClick={toggleMenu} className="hover:underline">DoctorDashboard</Link>
        </ul>
        <div className="hamburger-menu cursor-pointer flex flex-col md:hidden" onClick={toggleMenu}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
