import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />); // Рендеримо компонент
    const headline = screen.getByText(/Vite \+ React/i); // Шукаємо заголовок
    expect(headline).toBeInTheDocument(); // Перевіряємо, чи він є в документі
  });
});
