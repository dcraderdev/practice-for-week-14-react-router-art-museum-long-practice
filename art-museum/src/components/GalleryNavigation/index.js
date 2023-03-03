import { NavLink, Route } from 'react-router-dom'
import GalleryView from '../GalleryView'
import './GalleryNavigation.css';

function GalleryNavigation(props) {

  const { galleries } = props
  console.log(galleries);

  // const galleryList = galleries.map(gallery => (
  //   <li key={gallery.id} to={`/${gallery.url}`}>{gallery.name}</li>
  // ));




  return (
    <div>

      {  galleries.map(gallery => (
    <li key={gallery.id}>
      <NavLink activeClassName='active'  to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
    </li>))
    }
    

      <Route path="/galleries/:galleryId">
        <nav>
          <h2>Gallery Navigation</h2>
          <GalleryView galleries={galleries}/>
        </nav>
      </Route>
    </div>
  );
}

export default GalleryNavigation;