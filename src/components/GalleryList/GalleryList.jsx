// import "./Gallery.css";
import GalleryItems from "../GalleryItems/GalleryItems";


export default function GalleryList ({ imagesList }) { // pass in addLIke later
    

    return(
        <>
            {imagesList.map(image => 
                 <GalleryItems key={image.id} image={image}  />
            )}
       </>
    )
}


