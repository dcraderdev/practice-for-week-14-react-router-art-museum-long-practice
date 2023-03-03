import {NavLink, useParams} from 'react-router-dom'

function ArtDescription({artWork}){
  console.log(artWork);
  return (
    <h4>
      {artWork.map(work=>{
        <li>
          
        </li>
      })}
    </h4>
  )
}

export default ArtDescription