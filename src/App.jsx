import { useState, useEffect } from "react";
import "./App.css";

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
      <h1 className="text-center text-primary">Important Websites</h1>
      <div>
        <ol>
          {cool.map((data) => (
            <li>
              <div key={data._id}>
                <h3>{data.name}</h3>
                <p>_{data.use}</p>
                <a href={data.link}>{data.link}</a>
              </div>
            </li>
          ))}
        </ol>
        <hr/>
      </div>
    </div>
  );
}

export default App;
