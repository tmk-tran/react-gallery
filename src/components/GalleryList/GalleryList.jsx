import GalleryItem from "../GalleryItem/GalleryItem";



export default function GalleryList ({ imagesList, updateLikes }) { // pass in updateLikes as a prop
    

    return(
        <div className="images">
            {imagesList.map(image => 
                 <GalleryItem key={image.id} image={image} updateLikes={updateLikes} />
            )}
       </div>
    )
}


