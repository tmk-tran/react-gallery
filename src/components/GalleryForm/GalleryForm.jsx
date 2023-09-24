import React, { useState } from 'react';

export default function GalleryForm({ addImage }) {
    const [showForm, setShowForm] = useState(false);
    const [newImage, setNewImage] = useState({path: '', description: ''});

    // function to toggle the form
    const toggleForm = () => {
        setShowForm(!showForm);
        console.log(showForm);
    };

    // for when the button is clicked
    const handleAdd = (event) => {
       
        
        console.log('clicked ADD button');
        // function name for PUT request
    };

    return (
        <div>
            {!showForm? (
            <button className="addBtn" onClick={toggleForm}>+</button>
            ) : (
            <div>    
            <input type="text" placeholder="image URL" />
            <button onClick= {addImage}>ADD</button>
            </div>
            )}
        </div>
        
    );
};


// <input type="text" placeholder="image URL" />
// <button onClick= {handleAdd}>ADD</button>