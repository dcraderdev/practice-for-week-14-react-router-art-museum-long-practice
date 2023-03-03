import React from 'react';
import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation'
import { NavLink } from 'react-router-dom'
function App() {
// console.log(harvardArt.records);

  return (
    <div>
      <h1>Hello from App</h1>
      <NavLink className='cfb' to="/records">
        <GalleryNavigation galleries={harvardArt.records} />
      </NavLink> 
    </div>
  );
}

export default App;
