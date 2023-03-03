import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation'
import HomePage from './components/HomePage/HomePage';
import { NavLink, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="page-wrapper">
      <NavLink to="/">Home</NavLink>
      <Switch>

          <Route exact path="/">
            < HomePage />
            <GalleryNavigation galleries={harvardArt.records} />
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
