import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList({ imagesList, updateLikes, deleteImage }) {
  // pass in updateLikes, deleteImage as a prop

  return (
    <div className="images">
      {imagesList.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          updateLikes={updateLikes}
          deleteImage={deleteImage}
        />
      ))}
    </div>
  );
}
