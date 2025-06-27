export const generateListing = (lot) => {
  return {
    title: `Lot of ${lot.length} Cards - Estimated Value $${lot.reduce((acc, card) => acc + card.price, 0)}`,
    description: lot.map(card => `${card.name} - $${card.price}`).join('\n'),
    price: lot.reduce((acc, card) => acc + card.price, 0),
  };
};