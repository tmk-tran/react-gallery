// import "./Gallery.css";
import GalleryItem from "../GalleryItem/GalleryItem";



export default function GalleryList ({ imagesList }) { // pass in addLIke later
    

    return(
        <>
            {imagesList.map(image => 
                 <GalleryItem key={image.id} image={image}  />
            )}
       </>
    )
}


