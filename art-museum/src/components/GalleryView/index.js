import { NavLink, useParams,Route} from 'react-router-dom'
import './GalleryView.css';
import '../GalleryView'
import ArtImageTile from '../ArtImageTile'
import ArtDescription from '../ArtDescription';

function GalleryView({galleries}) {
  const {galleryId, artId} = useParams()
  const gallery = galleries.find(gallery=> gallery.id === +galleryId)

  const artWork = gallery.objects.find((art) => art.id === +artId)
  
  console.log(artWork);
  // return (
  //   <div >
  //     <h1>{gallery.name}</h1>
  //     <h1>{gallery.theme}</h1>

  //     <h2>
  //       <ArtImageTile art={gallery.objects} />
  //     </h2>


  //     <Route path="/galleries/:galleryId/art/:artId">
  //       <ArtDescription
  //         art={gallery.objects.find((art) => art.id === +artId)}
  //       />
  //     </Route>


  //   </div>
  // );

  return (
    <div >
      <h1>{gallery.name}</h1>
      <h1>{gallery.theme}</h1>


      <Route path="/galleries/:galleryId">
        <ArtImageTile art={gallery.objects} />
      </Route>


      <Route path="/galleries/:galleryId/art/:artId">
        <ArtDescription art={gallery.objects.find((art) => art.id === +artId)} />
      </Route>


    </div>
  );



}

export default GalleryView;