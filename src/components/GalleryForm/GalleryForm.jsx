import React, { useState } from 'react';

export default function GalleryForm({ addImage, imagePath, setImagePath, imageDescription, setImageDescription }) {
    const [showForm, setShowForm] = useState(false);

    // function to toggle the form
    const toggleForm = () => {
        setShowForm(!showForm);
        console.log(showForm);
        setImagePath('');
    };

    //function to handle input change
    const handleInputChange = (e) => {
        setImagePath(e.target.value);
    };

    //function for handleAdd
    const handleAdd = () => {
        addImage(imagePath);
        setImagePath('');
        toggleForm();
    };

    return (
        <div>
            {!showForm? (
            <button className="addBtn" onClick={toggleForm}>+</button>
            ) : (
            <div>    
            <input type="text" placeholder="image URL" value={imagePath} onChange={(event) => setImagePath(event.target.value)} />
            <button onClick= {addImage}>ADD</button>
            </div>
            )}
        </div>
        
    );
};