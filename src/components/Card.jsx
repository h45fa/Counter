import './Card.css'

const Card = (props) => {
  return (
    <div className="mainDiv">
      <div className="image">
        <img className='mainImg' src={props.img} alt="altphoto" />
        <h2>{props.level}</h2>
      </div>
      <h1 className='title'>{props.title}</h1>
      <div className='authorDiv'>
        <img src='../img/authorphoto.png' alt='Author'/>
        <span>{props.author}</span>
        <button>
          <img src='../img/star.svg' alt='star'/> {props.rating}
        </button>
      </div>
      <ul className='ulList'>
        <li>
          <img src='../img/user.svg' alt='User'/>
          <span>{props.students} student</span>
        </li>
        <li>
          <img src='../img/document.svg' alt='Doc'/>
          <span>{props.modules} Modul</span>
        </li>
        <li>
          <img src='../img/clock.svg' alt='Clock'/>
          <span>{props.duration}</span>
        </li>
      </ul>
    </div>
  )
}

export default Card;
