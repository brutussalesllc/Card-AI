import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import UploadCard from './components/UploadCard';
import CardBuilder from './components/CardBuilder';
import ListingGenerator from './components/ListingGenerator';

function App() {
  const [cards, setCards] = useState([]);
  const [lot, setLot] = useState(null);

  const handleCardUpload = (card) => {
    setCards((prev) => [...prev, card]);
    toast.success('Card uploaded!');
  };

  const handleLotBuild = (lot) => {
    setLot(lot);
    toast.success('Lot created!');
  };

  return (
    <Router>
      <Toaster position="top-right" />

      <nav className="p-4 space-x-4 bg-white shadow text-blue-600">
        <Link to="/upload">Upload</Link>
        <Link to="/builder">Builder</Link>
        <Link to="/listing">Listing</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/upload" replace />} />
          <Route path="/upload" element={<UploadCard onCardUpload={handleCardUpload} />} />
          <Route path="/builder" element={<CardBuilder cards={cards} onBuild={handleLotBuild} />} />
          <Route path="/listing" element={<ListingGenerator lot={lot} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
