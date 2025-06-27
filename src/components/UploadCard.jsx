import React, { useState } from 'react';

const UploadCard = ({ onCardUpload }) => {
  const [cardName, setCardName] = useState('');
  const [cardPrice, setCardPrice] = useState('');

  const handleUpload = () => {
    if (cardName && cardPrice) {
      onCardUpload({ name: cardName, price: parseFloat(cardPrice) });
      setCardName('');
      setCardPrice('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Upload a Card</h2>
      <input
        type="text"
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
        placeholder="Card Name"
        className="border p-1 mb-2"
      />
      <input
        type="number"
        value={cardPrice}
        onChange={(e) => setCardPrice(e.target.value)}
        placeholder="Price"
        className="border p-1 mb-2"
      />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
};

export default UploadCard;
