import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";
import "./App.css";

function App() {
  const [imagesList, setImagesList] = useState([]);
  const [imageDescription, setImageDescription] = useState("");

  useEffect(() => {
    getImages();
  }, []);

  // GET 
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

  // POST 
  const addImage = (imageUrl) => {
    console.log("image URL: ", imageUrl);

    axios
      .post("/gallery/", {
        path: imageUrl,
        description: imageDescription,
      })
      .then((response) => {
        getImages();
        setImageDescription("");
        console.log("Image added", response);
      })
      .catch((error) => {
        console.log("Error in addImage POST", error);
      });
  };

  // DELETE (stretch)
  const deleteImage = (id) => {
    axios
      .delete(`/gallery/${id}`)
      .then((response) => {
        getImages();
      })
      .catch((error) => {
        console.log("Error in deleteImage", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>

      <main>
        <div className="form-container">
          <GalleryForm addImage={addImage} />
        </div>
        <GalleryList imagesList={imagesList} deleteImage={deleteImage}/>
      </main>
    </div>
  );
}

export default App;
