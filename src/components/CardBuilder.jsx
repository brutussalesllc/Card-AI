// At top
const CardBuilder = ({ cards, lotValue, onLotValueChange, onBuild }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Build Lots</h2>
      <input
        type="number"
        value={lotValue}
        onChange={(e) => onLotValueChange(e.target.value)}
        className="border p-1 mb-2"
        placeholder="Target Lot Value"
      />
      <button onClick={onBuild} className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Lots
      </button>
      <ul>
        {cards.map((card, idx) => (
          <li key={idx}>
            {card.name} - ${card.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
