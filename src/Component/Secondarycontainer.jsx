import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Netflixmainlanguage from "../utils/netflixmainlanguage";

const Secondarycontainer = ({val}) => {
  const movies = useSelector((store) => store?.movies);
  const { Nowplayingmovie, toprated, Trailer, upcoming, popular } =
    movies || {};

  if (!Nowplayingmovie || !toprated || !Trailer || !upcoming || !popular) {
    return (
      <div className="h-screen w-screen bg-black text-6xl text-white">
        {/* <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=982558843711490184"
          frameborder="0"
          scrolling="no"
          className="h-full w-full scale-100"
        ></iframe> */}loading
      </div>
    );
  }
  const get=Netflixmainlanguage[val];
  return (
    <div className="bg-black">
      <div className="ml-10 -mt-32 relative z-8">
        <Movielist Title={get.movielist1} movies={movies?.Nowplayingmovie} />
        <Movielist Title={get.movielist2} movies={movies?.toprated} />
        <Movielist Title={get.movielist3} movies={movies?.upcoming} />
        <Movielist Title={get.movielist4} movies={movies?.popular} />
      </div>
    </div>
  );
};

export default Secondarycontainer;
