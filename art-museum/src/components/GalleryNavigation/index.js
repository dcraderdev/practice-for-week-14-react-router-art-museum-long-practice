import { NavLink } from 'react-router-dom'
import './GalleryNavigation.css';

function GalleryNavigation(props) {

  const { galleries } = props
  console.log(galleries);

  // const galleryList = galleries.map(gallery => (
  //   <li key={gallery.id} to={`/${gallery.url}`}>{gallery.name}</li>
  // ));


  const galleryList = galleries.map(gallery => (
    <li key={gallery.id}>
      <NavLink activeClassName='active'  to={`/galaries/${gallery.id}`}>{gallery.name}</NavLink>
    </li>
  ));

  return (
    <nav>
      <h2>Gallery Navigation</h2>
      <NavLink to="/">Home</NavLink>
      <ul>{galleryList}</ul>
    </nav>
  );
}

export default GalleryNavigation;