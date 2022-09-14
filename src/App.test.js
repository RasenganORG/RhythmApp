import App from "./App";
import { renderWithRedux } from "./testHelpers/renderWithRedux";
import { fireEvent, screen } from "@testing-library/react";

describe("Testing the App page", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  it("should see the schools Page", () => {
    renderWithRedux(<App />);
    const schoolsButton = screen.getByText("Schools");
    fireEvent.click(schoolsButton);
    const danceTitile = screen.getByText("Dance Schools");
    expect(danceTitile).toBeInTheDocument();
  });

  
  it("should see the news Page", () => {
    renderWithRedux(<App />);
    const schoolsButton = screen.getByText("News");
    fireEvent.click(schoolsButton);
    const newsTitle = screen.getByRole("heading", { level: 1 });
    expect(newsTitle).toHaveTextContent("News");
  });

  it("should see the login redirect when clicking on Statistics", () => {
    renderWithRedux(<App />);
    const statisticsButton = screen.getByText("Statistics");
    fireEvent.click(statisticsButton);
    const loginTitle = screen.getByText("Log In");
    expect(loginTitle).toBeInTheDocument();
  });
});

// Object.defineProperty(window, "matchMedia", {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(),
//     removeListener: jest.fn(),'
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });
