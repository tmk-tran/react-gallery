import React, { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "../Gallery/Gallery";
import "./App.css";

function App() {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    axios
      .get("/gallery/")
      .then((response) => {
        setImagesList(response.data); // change to setItemList later (its equivalent)
      })
      .catch((error) => {
        console.log("Error in getImages GET", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <main>
        <Gallery imagesList={imagesList} />
        <img src="images/goat_small.jpg" />
      </main>

    </div>
  );
}

export default App;
