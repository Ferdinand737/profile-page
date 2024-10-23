export default function Intro(props) {
  return (
    <div className="intro-section">
      <img src={require('../images/profilePic.png')} width='200' height='200' alt='me' className='intro-image'></img>
      <div className="intro-paragraph">
        {props.children}
      </div>
    </div>
  )
} 