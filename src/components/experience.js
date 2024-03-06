
import {EventSharp, CorporateFareSharp, LocationOnSharp} from '@mui/icons-material';
import Skills from "./skills";


function renderDetails(details){
  return(
    <ul className='employment-info-list'>
      {details.map((detail) =>(
        <li>
          {detail}
        </li>
      ))}
    </ul>
  )
}


export default function Experience(props){
    return(
       <div>
            <h3 className='employment-info-title'>{props.title}</h3>
            <h4 className='employment-info-header'>
                <p className='icon-text-field'><CorporateFareSharp/>&nbsp;{props.employer}</p>
                <p className='icon-text-field'><LocationOnSharp/>&nbsp;{props.location}</p>
                <p className='icon-text-field'><EventSharp/>&nbsp;{props.when}</p>
            </h4>          
            {props.details?(renderDetails(props.details)):<></>}
            {props.skills?(<Skills skills={props.skills}/>):<></>}  
       </div>
    )
}