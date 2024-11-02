import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      // Redirect to the patient dashboard (or doctor dashboard based on role)
      navigate('/patient-dashboard');
      closeModal(); // Close the modal after successful authentication
    } catch (error) {
      console.error("Error signing in:", error);
      alert(error.message);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Welcome to the Doctor Appointment System
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Book and manage appointments with healthcare providers easily.
      </p>
      <div className="space-x-4">
        <button onClick={() => { setIsSignup(false); openModal(); }} className="bg-red-500 text-white px-4 py-2 rounded">
          Login Patient
        </button>
        <button onClick={() => { setIsSignup(false); openModal(); }} className="bg-green-500 text-white px-4 py-2 rounded">
          Login Doctor
        </button>
        <button onClick={() => { setIsSignup(true); openModal(); }} className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>

     
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded"
              />
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200">
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
            </form>
            <button onClick={closeModal} className="mt-4 text-red-500">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
