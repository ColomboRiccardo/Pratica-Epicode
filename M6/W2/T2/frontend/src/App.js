import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/");
    const parsedResponse = await response.json();
    setData(parsedResponse);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Benvenuto nella tua front end</h1>
      {data && <p>{data}</p>}
      <form
        action="http://localhost:3001/immagine"
        method="post"
        enctype="multipart/form-data"
      >
        <label>Inserisci un file</label>
        <input type="file" name="avatar" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
