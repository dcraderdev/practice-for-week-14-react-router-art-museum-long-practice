import React from 'react';
import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation'
import GalleryView from './components/GalleryView'
import { NavLink, Route } from 'react-router-dom'
function App() {
// console.log(harvardArt.records);

  return (
    <div>

    <NavLink to="/">Home</NavLink>


    <Route path="/galleries">
        <GalleryNavigation galleries={harvardArt.records} />
    </Route>
    </div>
    

    // <div>
    //   <h1>Hello from App</h1>
    //   <GalleryView galleries={harvardArt.records} />
    //    <NavLink className='cfb' to="/records">
    //    <GalleryNavigation galleries={harvardArt.records} />
    //   </NavLink> 
  
    // </div>
  );
}

export default App;
