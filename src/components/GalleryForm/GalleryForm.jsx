import React, { useState } from "react";
import "./GalleryForm.css";
// Import the TextField component from Material-UI
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

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
    if(newUrl === '' || undefined) {
        alert('Please enter an image URL!');
    } else {
    addImage(newUrl, description);
    setNewUrl("");
    setDescription("");
    toggleForm();
  }};

  return (
    <div>
      {!showForm ? (
        <div className="toggleBtn">
          <div className="add-container">
            <Button className="addBtn" onClick={toggleForm} variant="contained" color="secondary">
                <AddIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className="add-form">
            <ClearIcon
              className="close-button"
              onClick={toggleForm}
            />
          <TextField
            variant="outlined"
            label="Enter Image URL"
            value={newUrl}
            onChange={(event) => setNewUrl(event.target.value)}
            required
          />  
          <TextField
            className="description"
            variant="filled"
            label="Enter Description (optional)"
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