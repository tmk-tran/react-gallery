import { useState } from "react";

export default function GalleryItem({ image, updateLikes }) {
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
      <div>
        {showImage ? (
          <img src={image.path} alt={image.description} onClick={imageClick} />
        ) : (
          <div className="card2" onClick={imageClick}>
            <p>{image.description}</p>
          </div>
        )}
        <button onClick={handleLikes}>Like</button>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
}

//   return (
//     <div className="card">
//       <div>
//         {/* <img src="images/goat_small.jpg" alt="goat" /> */}
//         <img src={image.path} alt={image.description} />
//         <p>{image.description}</p>
//       </div>
//       <div>
//         <button onClick={handleLikes}>Like</button>
//         <p>Likes: {likes}</p>
//       </div>
//     </div>
//   );
// }


