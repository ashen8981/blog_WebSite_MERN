import "./header.css"
import NodeImage from '../../images/Header.jpg';

export default function Header() {
  return (
    <div className='header'> 
      <div className="headerTitles">
        <span className="headerTitleSm">Node. js </span>
        <span className="headerTitleLg">Blog</span>
       </div>
       <img className="headerImg" src ={NodeImage} alt="NodeImage"/>
    </div>
  )
}
