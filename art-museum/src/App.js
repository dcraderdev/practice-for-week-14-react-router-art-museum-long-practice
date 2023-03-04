import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation'
import HomePage from './components/HomePage/HomePage';
import ArtDescription from './components/ArtDescription';
import { NavLink, Route, Switch, useParams } from 'react-router-dom'
function App() {
  

  return (
    <div className="page-wrapper">
      <NavLink to="/">Home</NavLink>

      <Switch>

          <Route exact path="/">
            < HomePage />
            <NavLink to="/galleries">Galleries</NavLink>  
          </Route>

          <Route path="/galleries">
              <GalleryNavigation galleries={harvardArt.records} />
          </Route>



          <Route> 
            <h1>404:Unknown Route</h1>
          </Route>

      </Switch>
    </div>
  );
}

export default App;
