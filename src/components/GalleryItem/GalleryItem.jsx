import { useState } from "react";

export default function GalleryItem() {
    const [likes, setLikes] = useState(0);

    const handleLikes = () => {
        setLikes(likes + 1);
        console.log('Clicked Like!');
    };

    return (
        <div className="card">
            <div>
            {/* <img src="images/goat_small.jpg" alt="goat" /> */}
            <p>A</p>
            </div>
            <div>
                <button onClick={handleLikes}>Like</button>
                <p>Likes: {likes}</p>
            </div>
        
        </div>
    );
}