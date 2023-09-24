import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList({ imagesList, deleteImage }) {
  // pass in deleteImage as a prop

  return (
    <div className="images">
      {imagesList.map((image) => (
        <GalleryItem
          key={image.id}
          image={image}
          deleteImage={deleteImage}
        />
      ))}
    </div>
  );
}
