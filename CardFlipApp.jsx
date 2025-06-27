import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CardFlipApp() {
  const [cards, setCards] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [folder, setFolder] = useState("Default Folder");
  const [scanning, setScanning] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleScan = () => {
    if (!image) return;
    setScanning(true);
    setTimeout(() => {
      const newCard = {
        id: uuidv4(),
        name: "Sample Card",
        value: "$10",
        image: preview,
      };
      setCards([...cards, newCard]);
      setImage(null);
      setPreview(null);
      setScanning(false);
    }, 1000);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {preview && (
        <div>
          <img src={preview} alt="Preview" style={{ maxWidth: "200px", margin: "10px 0" }} />
          <button onClick={handleScan} disabled={scanning}>
            {scanning ? "Scanning..." : "Scan Card"}
          </button>
        </div>
      )}
      <div style={{ marginTop: "20px" }}>
        {cards.map((card) => (
          <div key={card.id}>
            <img src={card.image} alt={card.name} style={{ width: "100px" }} />
            <p>{card.name} - {card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}