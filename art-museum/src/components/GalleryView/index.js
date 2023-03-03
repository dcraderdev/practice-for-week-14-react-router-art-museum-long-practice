import { NavLink, useParams } from 'react-router-dom'
import './GalleryView.css';

function GalleryView(props) {
  const {galleries} = props
  const {galleryId} = useParams()

  const gallery = galleries.find(gallery=> gallery.id === +galleryId)

  return (
    <div >
      <h1>
        {gallery.name}
      </h1>
      <h1>
        {gallery.theme}
      </h1>

    </div>
  );
}

export default GalleryView;