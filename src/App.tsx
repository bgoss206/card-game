import React, { useEffect, useState } from "react";
import { ReactComponent as TwoOfClubs } from "./cards/2C.svg";
// ... import other SVG files

interface CardImages {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const cardImages: CardImages = {
  TwoOfClubs,
  // ... add other card SVG components
};

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
