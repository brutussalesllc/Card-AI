import React, { useState } from 'react';

const CardBuilder = () => {
  const [cards, setCards] = useState([]);
  const [lotValue, setLotValue] = useState(20);

  const addCard = (card) => {
    setCards([...cards, card]);
  };

  const buildLots = () => {
    console.log(`Building lots worth $${lotValue}...`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Build Lots</h2>
      <input
        type="number"
        value={lotValue}
        onChange={(e) => setLotValue(e.target.value)}
        className="border p-1 mb-2"
        placeholder="Target Lot Value"
      />
      <button onClick={buildLots} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Lots
      </button>
      <ul>
        {cards.map((card, idx) => (
          <li key={idx}>{card.name} - ${card.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardBuilder;