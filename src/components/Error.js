import { useNavigate } from "react-router-dom"

const Error = () => {
  
  const navigate = useNavigate();

  return (
    <>
    <div >404 Error Not Found!</div>
    {/* navgigate(-1) will go back and we can navigate to some other page bu giving the page name */}
    <button onClick={() => navigate(-1)}>Go Back</button> 
    </>
  )
}

export default Error