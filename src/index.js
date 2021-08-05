import React, { useState } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import "./index.css";
import CatList from "./catList.js";
import FetchButton from "./fetchButton.js";

function App() {

  const [cats, setCats] = useState(null);
  const apiURL = "https://api.thecatapi.com/v1/breeds";


  const fetchData = async () => {
    const response = await axios.get(apiURL)
    setCats(response.data)
  }

  return (
    <div className="App">
      <h1>Juggle Cat API</h1>
      <h2>Displays various cat breeds</h2>

      <FetchButton fetchData={fetchData} buttonText={'Show cats'}/>
      <CatList cats={cats}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

