import React, { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    const previews = files.map(file => URL.createObjectURL(file));
    setImages(previews);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Upload Cards (Max 4)</h1>
      <input type="file" multiple accept="image/*" onChange={handleUpload} />
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`card-${i}`} width="150" />
        ))}
      </div>
    </div>
  );
}

export default App;
