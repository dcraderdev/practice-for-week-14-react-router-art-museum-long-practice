import { NavLink, Route, Switch } from 'react-router-dom'
import GalleryView from '../GalleryView'
import './GalleryNavigation.css';

function GalleryNavigation(props) {

  const { galleries } = props
  console.log(galleries);


  return (
    <div>

      <h2>Gallery Navigation</h2>
      {  galleries.map(gallery => (
    <li key={gallery.id}>
      <NavLink activeClassName='active'  to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
    </li>))
    }
    
    <Switch>
      <Route path="/" exact></Route>

      <Route path="/galleries/:galleryId">
        <nav>
          <GalleryView galleries={galleries}/>
        </nav>
      </Route>

    </Switch>


    </div>
  );
}

export default GalleryNavigation;