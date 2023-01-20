export default function Skills(props){
    return(
        <div className='project-skills'>
            {Array.from(props.skills).map((skill) => (
                <>
                <img title={`${skill}`}src={require(`../images/${skill}.png`)} width='30' height='30'></img>
                &nbsp;&nbsp;
                </>
            ))}
        </div>
    )
}