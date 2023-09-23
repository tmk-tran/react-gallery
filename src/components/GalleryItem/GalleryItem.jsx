// import { useState } from "react";

export default function GalleryItems() {
    return (
        <div className="card">
            <div>
            <img src="images/goat_small.jpg" alt="goat" />
            </div>
            <div>
                <button onClick={() => console.log('Clicked Like!')}>Like</button>
            </div>
        
        </div>
    );
}