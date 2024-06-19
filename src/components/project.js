
import { OpenInNewSharp } from "@mui/icons-material";
import Skills from "./skills";

export default function Project(props){
    const imageExists = (imageName) => {
        try {
            require(`../images/${imageName}.png`);
            return true;
        } catch (error) {
            return false;
        }
    };
    return (
        <div className="project-section">
            <h3 className="icon-text-field">
                {imageExists(props.name) && (
                    <div>
                        <img className="project-logo" src={require(`../images/${props.name}.png`)} width='50' height='50' alt={props.name} />
                        &nbsp;&nbsp;
                    </div>
                )}
                {props.url ? (
                    <span>
                        <a href={props.url} target="_blank" rel="noopener noreferrer">
                            {props.name}
                        </a>
                        &nbsp;
                        <OpenInNewSharp style={{ fontSize: '18px', verticalAlign: 'middle' }} />
                    </span>
                ) : (
                    <span>{props.name}</span>
                )}
            </h3>
            <p>
                {props.description}
            </p>
            
            {props.skills ? <Skills skills={props.skills}/> : null}
        </div>
)
}