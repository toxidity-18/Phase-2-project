import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = '/';
      })
      .catch(error => console.error('Sign-in error:', error));
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = '/';
      })
      .catch(error => console.error('Sign-up error:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="border rounded-lg p-4 bg-white shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        {isSigningUp ? (
          <button onClick={handleSignUp} className="bg-green-600 text-white p-2 rounded-lg">
            Sign Up
          </button>
        ) : (
          <button onClick={handleSignIn} className="bg-blue-600 text-white p-2 rounded-lg">
            Sign In
          </button>
        )}
        <button
          onClick={() => setIsSigningUp(!isSigningUp)}
          className="mt-4 text-blue-600 hover:underline"
        >
          {isSigningUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
