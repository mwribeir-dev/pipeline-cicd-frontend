import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <main
      style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}
    >
      <h1>Pipeline CI/CD - SEDUC-SP</h1>
      <p>Aplicação publicada automaticamente pelo GitHub Actions.</p>
      <button onClick={() => setContador(contador + 1)}>
        Cliques: {contador}
      </button>
    </main>
  );
}

export default App;
