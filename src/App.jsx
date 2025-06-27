import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SimpleCardApp = () => {
  const [cards, setCards] = useState([]);
  const [cardName, setCardName] = useState("");
  const [cardValue, setCardValue] = useState("");

  const addCard = () => {
    if (!cardName || !cardValue) return;
    setCards([...cards, { name: cardName, value: parseFloat(cardValue) }]);
    setCardName("");
    setCardValue("");
  };

  const totalValue = cards.reduce((acc, card) => acc + card.value, 0);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Simple Card Tracker</h1>

      <div className="flex flex-col gap-2 mb-4">
        <Input
          placeholder="Card Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Input
          placeholder="Card Value ($)"
          type="number"
          value={cardValue}
          onChange={(e) => setCardValue(e.target.value)}
        />
        <Button onClick={addCard}>Add Card</Button>
      </div>

      <div className="grid gap-4">
        {cards.map((card, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <span>{card.name}</span>
                <span>${card.value.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 font-bold text-lg">
        Total Value: ${totalValue.toFixed(2)}
      </div>
    </div>
  );
};

export default SimpleCardApp;
