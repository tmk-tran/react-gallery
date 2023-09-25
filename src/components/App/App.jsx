import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Swal from "sweetalert2";
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
  const addImage = (imageUrl, imageDescription) => {
    console.log("image URL: ", imageUrl, imageDescription);

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
  // const deleteImage = (id) => {
  //   axios
  //     .delete(`/gallery/${id}`)
  //     .then((response) => {
  //       getImages();
  //     })
  //     .catch((error) => {
  //       console.log("Error in deleteImage", error);
  //     });
  // };

  // DELETE using sweetalert2
  const deleteImage = (id) => {
    Swal.fire({
      title: "Wait!",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with delete action
        axios
          .delete(`/gallery/${id}`)
          .then((response) => {
            getImages();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          })
          .catch((error) => {
            console.log("Error in deleteImage", error);
            Swal.fire("Error", "An error occurred while deleting.", "error");
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User canceled, no action needed
        Swal.fire("Cancelled", "Your item is safe :)", "info");
      }
    });
  };

  // for scroll button
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Gallery</h1>
        <h1 className="App-title" style={{ fontSize: "1em" }}>( a 'Not-Instagram' production )</h1>
        <h1 className="App-title" style={{ fontSize: "1em" }}>by: T Schisel</h1>
      </header>
      <main>
        <hr />
        <br />
        <div className="form-container">
          <GalleryForm addImage={addImage} />
        </div>
        <br />
        <div id="scroll-button">
          <button className="scrollBtn" onClick={scrollToTop}>
            <div className="icon-container">
            <ArrowUpwardIcon style={{ color: "rgb(107, 107, 231)"}} />
            </div>
          </button>
        </div>
        <br />
        <br />
        <GalleryList imagesList={imagesList} deleteImage={deleteImage} />
      </main>
    </div>
  );
}

export default App;
