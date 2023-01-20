import {ArticleSharp, HomeWorkSharp,EventSharp} from '@mui/icons-material';
export default function Education(props){
    return(
    <div className='education-section'>
        <h3 className="icon-text-field">
            <img className="institution-logo" src={require(`../images/${props.school}.png`)} width='50' height='50'></img>
            &nbsp;&nbsp;
            {props.title}
        </h3>
        <div className='education-info'>
            <span>
                <p className='icon-text-field'><ArticleSharp/>&nbsp;{props.specialization}</p>
            </span>
            <span>
                <p className='icon-text-field'><HomeWorkSharp/>&nbsp;{props.school}</p>
            </span>
            <span>
                <p className='icon-text-field'><EventSharp/>&nbsp;{props.when}</p>
            </span>
        </div>
    </div>)    
}