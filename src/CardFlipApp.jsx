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
        folder,
        image: preview,
        player: "Josh Allen",
        year: "2021",
        brand: "Select",
        value: "$45",
      };
      setCards((prev) => [...prev, newCard]);
      setImage(null);
      setPreview(null);
      setScanning(false);
    }, 1500); // simulate scan delay
  };

  const folders = [...new Set(cards.map((c) => c.folder))];

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">CardFlip AI MVP</h2>

      <input type="file" onChange={handleUpload} />
      <input
        value={folder}
        onChange={(e) => setFolder(e.target.value)}
        placeholder="Folder name"
        className="ml-2 border p-1"
      />

      <div className="my-3">
        {preview && (
          <div>
            <img src={preview} alt="Preview" className="w-32 border my-2" />
            <button
              onClick={handleScan}
              className="bg-blue-500 text-white px-3 py-1 rounded"
              disabled={scanning}
            >
              {scanning ? "Scanning..." : "Scan & Add to Folder"}
            </button>
          </div>
        )}
      </div>

      {folders.map((f) => (
        <div key={f} className="mt-6">
          <h3 className="text-lg font-bold">{f}</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {cards
              .filter((card) => card.folder === f)
              .map((card) => (
                <div key={card.id} className="border p-2 rounded">
                  <img src={card.image} alt="Card" className="w-full mb-1" />
                  <div className="text-sm">
                    <strong>{card.player}</strong>
                    <div>{card.year} {card.brand}</div>
                    <div>{card.value}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
