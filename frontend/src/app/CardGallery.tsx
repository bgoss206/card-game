import React from "react";
import { SUITS, RANKS } from "./constants";
import * as cardImages from "./cards";

// Define the type for the cardImages object
interface CardImages {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function CardGallery() {
  const generatedCardImages: CardImages = {};
  for (let suit of SUITS) {
    for (let rank of RANKS) {
      const Card = (cardImages as any)[`${rank}${suit}`];
      if (Card) {
        generatedCardImages[`${rank}Of${suit}`] = Card;
      }
    }
  }

  return (
    <div className="card-gallery" style={{ backgroundColor: "lightgray" }}>
      {Object.entries(generatedCardImages).map(([card, SvgComponent]) => (
        <SvgComponent key={card} style={{ width: "100px", height: "150px" }} />
      ))}
    </div>
  );
}

export default CardGallery;
