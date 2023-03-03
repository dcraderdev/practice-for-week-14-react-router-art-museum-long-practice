import { NavLink, useParams } from 'react-router-dom'
import './GalleryView.css';

function GalleryView(props) {
  const {galleries} = props
  const {galleryId} = useParams()

  
  console.log('galleryId',galleryId);
  const gallery = galleries.find(gallery=> gallery.id === +galleryId)
  
 

  console.log('gallery',gallery);

  return (
    <h1>
      {gallery.name}
    </h1>
  );
}

export default GalleryView;