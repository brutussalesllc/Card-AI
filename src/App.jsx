import React, { useState } from 'react';
import UploadCard from './components/UploadCard';
import CardBuilder from './components/CardBuilder';
import { generateListing } from './components/ListingGenerator';

function App() {
  const [cards, setCards] = useState([]);
  const [lotValue, setLotValue] = useState(20);
  const [listing, setListing] = useState(null);

  const handleCardUpload = (card) => {
    setCards([...cards, card]);
  };

  const handleBuild = () => {
    const sorted = [...cards].sort((a, b) => b.price - a.price);
    let lots = [];
    let lot = [];
    let total = 0;

    for (const card of sorted) {
      if (total + card.price <= lotValue) {
        lot.push(card);
        total += card.price;
      }
    }

    setListing(generateListing(lot));
  };

  return (
    <div className="p-6 space-y-6 font-sans">
      <h1 className="text-2xl font-bold">Card Lot Builder</h1>

      <UploadCard onCardUpload={handleCardUpload} />

      <CardBuilder
        cards={cards}
        lotValue={lotValue}
        onLotValueChange={(v) => setLotValue(Number(v))}
        onBuild={handleBuild}
      />

      {listing && (
        <div className="p-4 border mt-4 rounded bg-white shadow">
          <h2 className="font-bold text-xl mb-2">{listing.title}</h2>
          <pre className="text-sm whitespace-pre-wrap">{listing.description}</pre>
          <p className="mt-2 font-semibold">Total Price: ${listing.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
