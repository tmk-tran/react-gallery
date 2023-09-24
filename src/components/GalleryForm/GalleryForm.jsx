export default function GalleryForm() {
    return (
        <div>
            <input type="text" placeholder="image URL" />
            <button onClick= {() => console.log('clicked ADD')}>ADD</button>
        </div>
    );
};