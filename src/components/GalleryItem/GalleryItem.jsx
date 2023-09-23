import { useState } from "react";

export default function GalleryItem({ image, updateLikes }) {
    const [likes, setLikes] = useState( image.likes );

    const handleLikes = () => {
        setLikes(likes + 1);
        console.log('Clicked Like!');
        updateLikes(image.id);
    };



    return (
        <div className="card">
            <div>
            {/* <img src="images/goat_small.jpg" alt="goat" /> */}
            <img src={image.path} alt={image.description} />
            <p>{image.description}</p>
            </div>
            <div>
                <button onClick={handleLikes}>Like</button>
                <p>Likes: {likes}</p>
            </div>
        
        </div>
    );
}