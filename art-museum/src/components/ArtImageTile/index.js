import {Link, NavLink, useParams, Route} from 'react-router-dom'
import './ArtImageTile.css'
import ArtDescription from '../ArtDescription'

function ArtImageTile({art}){

  const {galleryId, artId} = useParams()

 console.log('art',art);
  // return(
  //   <div>
  //     {art.map(work => (
  //       <li className='tile' key={work.id}>
          
  //         {/* <NavLink to={`/galleries/${galleryId}/art/${work.id}`}> */}
  //           <img src={work.images[0]?.baseimageurl} alt={work.title} />
  //           <ArtDescription art={work}/>
  //         {/* </NavLink> */}

  //         <Route path="/galleries/:galleryId/art/:artId">
  //           <ArtDescription art={art.find((artwork) => artwork.id === +artId)} />
  //         </Route>

          
  //       </li>
  //     ))}
  //   </div>   
 
  // )

  return (
    <div>
      {art.map((work) => (
        <li className='tile' key={work.id}>
          <Link to={`/galleries/${galleryId}/art/${work.id}`}>
            <img src={work.images[0]?.baseimageurl} alt={work.title} />
            <ArtDescription art={work}/>

          </Link>
        </li>
      ))}
    </div>
  );

}

export default ArtImageTile