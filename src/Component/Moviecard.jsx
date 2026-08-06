import { Moviecard_CDN_URL } from "../utils/const";

const Moviecard = ({  movies, posterpath }) => {
  return (
    <div>
      <div 
      className="w-64 h-35 mr-4 bg-zinc-900 rounded-md  cursor-pointer  transition-transform duration-500 hover:scale-115  ">
        <img
          alt={movies.title + "poster"}
          src={Moviecard_CDN_URL + posterpath}
          className="w-full h-full object-fill"
        ></img> 
      </div>  
    </div>
  );
};

export default Moviecard;
