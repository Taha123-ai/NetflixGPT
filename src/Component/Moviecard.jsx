import { useNavigate } from "react-router-dom";
import { Moviecard_CDN_URL } from "../utils/const";

const Moviecard = ({  movies, posterpath ,id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div 
      className="w-64 h-40 mr-4 p-0.5 rounded-lg  cursor-pointer hover:bg-red-500 overflow-hidden"
      onClick={()=>navigate(`${id}`)}>
        <img
          alt={movies.title + "poster"}
          src={Moviecard_CDN_URL + posterpath}
          className="w-full h-full object-fill rounded-lg"  
        ></img> 
      </div>  
    </div>
  );
};

export default Moviecard;
