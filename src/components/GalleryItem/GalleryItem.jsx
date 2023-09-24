import { useState } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function GalleryItem({ image, deleteImage }) { // pass in deleteImage as props

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

  return (
    <div className="card">
        {showImage ? (
        <div className="image-container">
          <img key={image.id} src={image.path} alt={image.description} onClick={imageClick} />
        </div>  
        ) : (
          <div className="card2" onClick={imageClick}>
            <p className="description">{image.description}</p>
            <div className="deleteBtn">
              <button className="delete" onClick={() => deleteImage(image.id)}>Delete</button>
            </div>
          </div>
        )}
          <div className="under-image">       
            <button className="likes" onClick={handleLikes}><FavoriteIcon style={{ fontSize: 24, color: "red" }} /></button>
            <button className="editBtn" onClick={imageClick}>Hit me!</button>
            <p className="likes-text">{likes} likes</p>
          </div>
    </div>
  );
}


