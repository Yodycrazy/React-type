import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock de react-router-dom
jest.mock("react-router-dom");

// Mock de @mui/material
jest.mock("@mui/material", () => ({
  Typography: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

test("renders Tienda Virtual text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tienda Virtual/i);
  expect(linkElement).toBeInTheDocument();
});
