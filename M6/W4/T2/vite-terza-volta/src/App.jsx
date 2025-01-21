import "./App.css";
import { useState } from "react";

function App() {
  //const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleButton = async () => {
    const response = await fetch(
      "https://example-backend-colomboriccardo-riccardocolombos-projects.vercel.app/api/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: input }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="app">
      <p className="read-the-docs">
        Benvenuto nell esempio di app piccolino
      </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
      <button onClick={handleButton}>Invia</button>
    </div>
  );
}

export default App;
