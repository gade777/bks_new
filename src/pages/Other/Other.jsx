import {useEffect} from 'react'
import "../Other/other.css"
import leftImg from "../../assets/other-left.png"
import rightImg from "../../assets/other-right.png"

const Other = () => {
  return (
    <div className="parent-container">
    <div className="child-container">
      <img src={leftImg} alt="Books" className="child-image" />
      <button className="child-button">Books</button>
    </div>
    <div className="child-container">
      <img src={rightImg} alt="Research Papers" className="child-image" style={{marginBottom:'1rem'}} />
      <button className="child-button" >Research Papers</button>
    </div>
  </div>
  )
}

export default Other;