import { useState } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import SubjectIcon from '@mui/icons-material/Subject';


export default function GalleryItem({ image, deleteImage }) {
  // pass in deleteImage as props

  const [likes, setLikes] = useState(image.likes);
  const [showImage, setShowImage] = useState(true);

  // function to toggle the image
  const imageClick = () => {
    setShowImage(!showImage);
  };

  // for when button is clicked
  const handleLikes = () => {
    setLikes(likes + 1); // increase count
    console.log("Clicked Like!");
    axios
      .put(`/gallery/likes/${image.id}`) // couldn't find id, had errors, couldn't resolve until I changed this to include {image.id}
      .then((response) => {
        console.log("Likes updated on the server", response);
      })
      .catch((error) => {
        console.log("Error in handleLikes PUT to the server", error);
      });
  };

  // Format 'likes' with commas
  const commaLikes = likes.toLocaleString();

  return (
    <div className="card">
      {showImage ? (
        <div className="image-container">
          <img
            key={image.id}
            src={image.path}
            alt={image.description}
            onClick={imageClick}
          />
        </div>
      ) : (
        <div className="card2" onClick={imageClick}>
          <p className="description">{image.description}</p>
          <div className="deleteBtn">
            <button className="delete" onClick={() => deleteImage(image.id)}>
              <DeleteIcon style={{ fontSize: 24, color: "black" }} />
            </button>
          </div>
        </div>
      )}
      <div className="under-image">
        <button className="likes" onClick={handleLikes}>
          <FavoriteIcon style={{ fontSize: 24, color: "red" }} />
        </button>
          <p className="likes-text">{commaLikes} likes</p>
          <br />
        <div className="editBtn-container">
          <button className="editBtn" onClick={imageClick}><SubjectIcon style={{ color:"rgb(157, 157, 255)" }} /></button>
        </div>
      </div>
    </div>
  );
}
