import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Componente App", () => {
  it("exibe o título principal da aplicação", () => {
    render(<App />);
    expect(screen.getByText(/Pipeline CI\/CD - SEDUC-SP/i)).toBeInTheDocument();
  });

  it("incrementa o contador ao clicar no botão", async () => {
    render(<App />);
    const botao = screen.getByRole("button");
    expect(botao).toHaveTextContent("Cliques: 0");
    await userEvent.click(botao);
    expect(botao).toHaveTextContent("Cliques: 1");
  });
});
