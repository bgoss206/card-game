import React from "react";
import { SUITS, RANKS } from "./constants";

// Define the type for the cardImages object
interface CardImages {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

// Dynamically generate the cardImages object
const cardImages: CardImages = {};
for (let suit of SUITS) {
  for (let rank of RANKS) {
    const Card = require(`./cards/${rank}${suit}.svg`).ReactComponent;
    cardImages[`${rank}Of${suit}`] = Card;
  }
}

function CardGallery() {
  return (
    <div className="card-gallery">
      {Object.entries(cardImages).map(([card, SvgComponent]) => (
        <SvgComponent key={card} />
      ))}
    </div>
  );
}

export default CardGallery;
