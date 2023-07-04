import React from "react";
import { render, screen } from "@testing-library/react";
import CardGallery from "./App";
import { SUITS, RANKS } from "./constants";

jest.mock("./constants", () => ({
  SUITS: ["C", "D", "H", "S"],
  RANKS: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
}));

// Mocked React component for testing
jest.mock("./cards/AH.svg", () => ({
  ReactComponent: () => <svg data-testid="svg-card" />,
}));

// Generate mock SVG components dynamically
const mockCardComponents: { [key: string]: React.FunctionComponent } = {};
for (let suit of SUITS) {
  for (let rank of RANKS) {
    const key = `./cards/${rank}${suit}.svg`;
    mockCardComponents[key] = () => <svg data-testid="svg-card" />;
  }
}

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  createElement: (type: any, props: any, ...children: any[]) => {
    if (
      typeof type === "string" &&
      props.src &&
      mockCardComponents[props.src]
    ) {
      const MockedComponent = mockCardComponents[props.src];
      return <MockedComponent {...props} />;
    }
    return React.createElement(type, props, ...children);
  },
}));

describe("CardGallery", () => {
  it("renders the card gallery with the correct number of SVG components", () => {
    const expectedCardCount = SUITS.length * RANKS.length;

    render(<CardGallery />);

    const svgCards = screen.getAllByTestId("svg-card");
    expect(svgCards).toHaveLength(expectedCardCount);
  });
});
