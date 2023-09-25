// import React, { useState } from "react";
// // Import the TextField component from Material-UI
// import TextField from "@mui/material/TextField";
// import ClearIcon from "@mui/icons-material/Clear";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

// export default function GalleryForm({ addImage }) {
//   const [showForm, setShowForm] = useState(false);
//   const [newUrl, setNewUrl] = useState("");
//   const [description, setDescription] = useState("");

//   // function to toggle the form
//   const toggleForm = () => {
//     setShowForm(!showForm);
//     console.log(showForm);
//     setNewUrl("");
//   };

//   //function for handleAdd
//   const handleAdd = () => {
//     if(newUrl === '' || undefined) {
//         alert('Please enter an image url!');
//     } else {
//     addImage(newUrl, description);
//     setNewUrl("");
//     setDescription("");
//     toggleForm();
//   }};

//   return (
//     <div>
//       {!showForm ? (
//         <div className="toggleBtn">
//           <div className="add-container">
//             <Button className="addBtn" onClick={toggleForm} variant="contained" color="secondary">
//                 <AddIcon />
//             </Button>
//           </div>
//         </div>
//       ) : (
//         <div className="add-form">
//             <ClearIcon
//               className="close-button"
//               onClick={toggleForm}
//             />
//           <TextField
//             variant="outlined"
//             label="Enter Image URL"
//             value={newUrl}
//             onChange={(event) => setNewUrl(event.target.value)}
//             required
//           />  
//           <TextField
//             className="description"
//             variant="filled"
//             label="Enter Description (optional)"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//           />
//           <button className="add-image" onClick={handleAdd}>
//             ADD
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function GalleryForm({ addImage }) {
  const [showForm, setShowForm] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null); // State to store the selected image file

  // function to toggle the form
  const toggleForm = () => {
    setShowForm(!showForm);
    console.log(showForm);
    setNewUrl("");
    setImageFile(null); // Clear selected image file when toggling form
  };

  // function for handleAdd
  const handleAdd = () => {
    if (!imageFile) {
      alert("Please select an image to upload!");
    } else {
      // Call the addImage function with the selected image file and description
      addImage(imageFile, description);
      setNewUrl("");
      setDescription("");
      toggleForm();
    }
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div>
      {!showForm ? (
        <div className="toggleBtn">
          <div className="add-container">
            <Button
              className="addBtn"
              onClick={toggleForm}
              variant="contained"
              color="secondary"
            >
              <AddIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className="add-form">
          <Button
            onClick={toggleForm}
            variant="outlined"
            color="secondary"
          >
            Cancel
          </Button>
          <TextField
            variant="outlined"
            label="Enter Image Description (optional)"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} // Handle image file selection
          />
          <Button
            className="add-image"
            onClick={handleAdd}
            variant="contained"
            color="primary"
          >
            Upload
          </Button>
        </div>
      )}
    </div>
  );
}
