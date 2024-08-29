import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const api = import.meta.env.VITE_REACT_API_COOL;
  const [cool, setCool] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCool((cool) => data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">Important Websites 🤯</h1>
      <div>
        <ol>
          {cool.map((data) => (
            <li key={data._id}>
              <div >
                <h3>{data.name}</h3>
                <>_{data.use}</>
                <br/>
                <a href={data.link} className="link-primary" style={{textDecoration:'none'}}>Checkout Site</a>
              </div>
              <br/>
            </li>
          ))}
        </ol>
        <hr/>
      </div>
      <p>&#169;2024 Rojo's Ltd | All Rights Are Reserved</p>
    </div>
  );
}

export default App;
