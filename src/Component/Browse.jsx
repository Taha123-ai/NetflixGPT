import { Link } from "react-router-dom";

const Browse = () => {
  return (
    <div>
    <div>Browse</div>
    <Link to="login" className="p-20 bg-red-400">Sign In</Link>
    </div>
  )
}

export default Browse;