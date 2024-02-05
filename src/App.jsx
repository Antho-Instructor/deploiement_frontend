import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const URL = import.meta.env.VITE_BACKEND_URL;
        const response = await fetch(`${URL}/items`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Notre appel API vers de la prod sur digitalOcean</h1>
      <ul>
        {items.length !== 0
          ? items.map((item) => <li key={item.id}>{item.title}</li>)
          : "Chargement..."}
      </ul>
    </div>
  );
}

export default App;
