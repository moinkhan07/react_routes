import { Link, Outlet } from "react-router-dom"
const Contact = () => {
  return (
    <div>
      <Link to={"phone"}><h3>Contact via phone number</h3></Link>
      <Link to={"mail"}><h3>Contact via mail</h3></Link>
      <Outlet />
    </div>
  )
}

export default Contact