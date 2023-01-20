

export default function Contact(props){
    return(
        <span>                 
            <p className='icon-text-field'>{props.children}&nbsp;{props.service}: <a href={props.link}>{props.username}</a></p>
        </span>
    )
}