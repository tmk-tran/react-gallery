import React, { useState } from "react";
// Import the TextField component from Material-UI
import TextField from "@mui/material/TextField";

export default function GalleryForm({ addImage }) {
  const [showForm, setShowForm] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [description, setDescription] = useState("");

  // function to toggle the form
  const toggleForm = () => {
    setShowForm(!showForm);
    console.log(showForm);
    setNewUrl("");
  };

  //function for handleAdd
  const handleAdd = () => {
    addImage(newUrl, description);
    setNewUrl("");
    setDescription("");
    toggleForm();
  };

  return (
    <div>
      {!showForm ? (
        <button className="addBtn" onClick={toggleForm}>
          +
        </button>
      ) : (
        <div className="add-form">
          <input
            type="text"
            id="input"
            placeholder="Enter Image URL"
            value={newUrl}
            onChange={(event) => setNewUrl(event.target.value)}
          />
          <TextField
            className="description"
            variant="outlined"
            label="Enter Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button className="add-image" onClick={handleAdd}>
            ADD
          </button>
        </div>
      )}
    </div>
  );
}

// <TextField variant="filled" label="image URL" value={newUrl} onChange={(event) => setNewUrl(event.target.value)} />
