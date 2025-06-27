import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to CardAI</h1>
        <p className="text-lg mb-6">
          Upload your cards, build lots, and generate ready-to-post listings in seconds.
        </p>
        <Link
          to="/upload"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
