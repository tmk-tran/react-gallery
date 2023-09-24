import React, { useState } from 'react';

export default function GalleryForm({ addImage }) {
    const [showForm, setShowForm] = useState(false);
    const [newUrl, setNewUrl] = useState('');

    // function to toggle the form
    const toggleForm = () => {
        setShowForm(!showForm);
        console.log(showForm);
        setNewUrl('');
    };

    //function for handleAdd
    const handleAdd = () => {
        addImage(newUrl);
        setNewUrl('');
        toggleForm();
    };

    return (
        <div>
            {!showForm? (
            <button className="addBtn" onClick={toggleForm}>+</button>
            ) : (
            <div>    
            <input type="text" placeholder="image URL" value={newUrl} onChange={(event) => setNewUrl(event.target.value)} />
            <button onClick= {handleAdd}>ADD</button>
            </div>
            )}
        </div>
        
    );
};