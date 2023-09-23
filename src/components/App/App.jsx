import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import "./App.css";

function App() {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  // GET axios for images
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

  // PUT axios request to update likes
  const updateLikes = (id) => {
    axios
    .put(`/gallery/like/${id}`)
    .then((response) => {
        getImages();
        console.log("Likes updated", response);
      })
    .catch((error) => {
        console.log("Error in updateLikes PUT", error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <main>
        <GalleryList imagesList={imagesList} updateLikes={updateLikes} />
      </main>

    </div>
  );
}

export default App;
