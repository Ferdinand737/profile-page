
import { OpenInNewSharp } from "@mui/icons-material";
import Skills from "./skills";

export default function Project(props){
    return(
        <div className="project-section">
            <h3 className="icon-text-field">
                <img className="project-logo" src={require(`../images/${props.name}.png`)} width='50' height='50'></img>
            <a href={props.url} target="_blank" rel="noopener noreferrer" >
                {props.name}
            </a>
                <OpenInNewSharp/>
            </h3>
            <p>
                {props.description}
            </p>
            
            {props.skills?(<Skills skills={props.skills}/>):<></>}
        </div>
    )
}