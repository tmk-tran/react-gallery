import { useState } from "react";

export default function GalleryItem({ image, updateLikes, deleteImage }) { // pass in updateLikes, deleteImage as props
  // pass in updateLikes as a prop
  const [likes, setLikes] = useState(image.likes);
  const [showImage, setShowImage] = useState(true);

  // function to toggle the image
  const imageClick = () => {
    setShowImage(!showImage);
  };

  // for when button is clicked
  const handleLikes = () => {
    setLikes(likes + 1);
    console.log("Clicked Like!");
    updateLikes(image.id); // here to update likes for specific image
  };

  return (
    <div className="card">
        {showImage ? (
        <div className="image-container">
          <img key={image.id} src={image.path} alt={image.description} onClick={imageClick} />
        </div>  
        ) : (
          <div className="card2" onClick={imageClick}>
            <br />
            <br />
            <br />
            <br />
            <p className="description">{image.description}</p>
            <br />
            <br />
            <br />
            <br />
            <button className="delete" onClick={() => deleteImage(image.id)}>Delete</button>
          </div>
        )}
          <div className="under-image">       
            <button className="likes" onClick={handleLikes}>Like</button>
            <p className="likes-text">{likes} likes</p>
          </div>
    </div>
  );
}


