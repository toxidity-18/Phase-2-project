import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ShoppingBagIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';

const Header = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      window.location.href = '/'; 
    });
  };

  return (
    <header className="bg-cover rounded-xl shadow-lg bg-top- bg-center text-slate-950 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-size-5xl ">GATUNG’ANG’A <span className='text-red-700'>AUTO SPARES</span> </h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="flex items-center hover:text-gray-300"><HomeIcon className="w-5 h-5 mr-1"/>Home</Link></li>
          
          {/* Dropdown Menu for Catalog */}
          <li className="relative group">
            <Link to="/catalog" className="flex items-center hover:text-gray-300">
              <ShoppingBagIcon className="w-5 h-5 mr-1"/>Catalog
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black p-2 rounded-lg shadow-lg">
              <li><Link to="/catalog/brakes" className="block px-4 py-2 hover:bg-gray-200">Brakes</Link></li>
              <li><Link to="/catalog/filters" className="block px-4 py-2 hover:bg-gray-200">Filters</Link></li>
              <li><Link to="/catalog/plugs" className="block px-4 py-2 hover:bg-gray-200">Spark Plugs</Link></li>
            </ul>
          </li>

          {/* Dropdown Menu for Feedback */}
          <li className="relative group">
            <Link to="/feedback" className="flex items-center hover:text-gray-300">
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-1"/>Feedback
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black p-2 rounded-lg shadow-lg">
              <li><Link to="/feedback/submit" className="block px-4 py-2 hover:bg-gray-200">Submit Feedback</Link></li>
              <li><Link to="/feedback/view" className="block px-4 py-2 hover:bg-gray-200">View Feedback</Link></li>
            </ul>
          </li>

          {/* Dropdown Menu for Profile */}
          <li className="relative group">
            <Link to="/profile" className="flex items-center hover:text-gray-300">
              <UserCircleIcon className="w-5 h-5 mr-1"/>Profile
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black p-2 rounded-lg shadow-lg">
              <li><Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">View Profile</Link></li>
              <li><button onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-200 w-full text-left">Sign Out</button></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
