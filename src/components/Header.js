import {Link,NavLink} from 'react-router-dom';
const Header = () => {

  const navStyleLink = ({isActive})=>{
    return{
      textDecoration:isActive ? "none" : "underline",
      fontSize: "25px",
      color:isActive?"red":"white"
    }
  }

  return (
    <div className="header">
        <NavLink style={navStyleLink} to={"/"}>Home</NavLink>
        <NavLink style={navStyleLink} to={"/about"}>About</NavLink>
        <NavLink style={navStyleLink} to={"/contact"}>Contact</NavLink>
    </div>
  )
}

export default Header