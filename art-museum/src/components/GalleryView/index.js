import { NavLink, useParams } from 'react-router-dom'
import './GalleryView.css';
import '../GalleryView'
import ArtImageTile from '../ArtImageTile'

function GalleryView(props) {
  const {galleries} = props
  const {galleryId} = useParams()

  const gallery = galleries.find(gallery=> gallery.id === +galleryId)
  console.log(gallery.objects);
  console.log(gallery.id);

  return (
    <div >
      <h1>
        {gallery.name}
      </h1>
      <h1>
        {gallery.theme}
      </h1>
      <h2>
        this
        <NavLink to='/'></NavLink> 
        <ArtImageTile art={gallery.objects} />
        {/* <img src='https://nrs.harvard.edu/urn-3:HUAM:CARP11440_dynmc'></img> */}
        
      </h2>


    </div>
  );
}

export default GalleryView;