import {Link, NavLink, useParams} from 'react-router-dom'
import './ArtImageTile.css'
import ArtDescription from '../ArtDescription'

function ArtImageTile({art}){

  const {galleryId} = useParams()

 console.log('art',art);
  return(
    <div>
      {art.map(work => (
        <li className='tile' key={work.id}>
          
          <NavLink to={`/galleries/${galleryId}/art/${work.id}`}>
            <img src={work.images[0]?.baseimageurl} alt={work.title} />
            <ArtDescription artWork={work}/>
          </NavLink>

        </li>
      ))}
    </div>   
 
  )
}

export default ArtImageTile