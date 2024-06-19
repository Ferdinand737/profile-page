import {ArticleSharp, HomeWorkSharp,EventSharp, NotesSharp} from '@mui/icons-material';
export default function Education(props){

    const getImageMapping = (school) => {
        const imageMappings = {
            'University of British Columbia': require(`../images/ubc.png`),
            'Northern Lights College': require(`../images/nlc.png`),
        }
        return imageMappings[school] || '';
    }


    return(
        <div className='education-section'>
            <h3 className="icon-text-field">
                <img className="institution-logo" src={getImageMapping(props.school)} width='50' height='50'></img>
                &nbsp;&nbsp;
                {props.title}
            </h3>
            <div className='education-info'>
                {props.work ? (
                    <span>
                        <p className='icon-text-field'>
                         <NotesSharp />&nbsp;<a href={props.workLink}>{props.work}</a>
                        </p>
                    </span>
                ) : (
                    <></>
                )}
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
        </div>
    )    
}