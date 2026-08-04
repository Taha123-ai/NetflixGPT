import { Link } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  

  return (
    <div>
      <Header />
      <Link to="login" className="p-20 bg-red-400">
        Sign In
      </Link>
    </div>
  );
};

export default Browse;
