import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Netflixmainlanguage from "../utils/netflixmainlanguage";
import { bg_img } from "../utils/const";

const Secondarycontainer = ({val}) => {
  const movies = useSelector((store) => store?.movies);
  const { Nowplayingmovie, toprated, Trailer, upcoming, popular } =
    movies || {};

  if (!Nowplayingmovie || !toprated || !Trailer || !upcoming || !popular) {
    return (
      <div className="h-screen w-screen bg-black text-6xl text-white">
        <img src={bg_img} className="h-full w-full p-120 sm:p-60 md:p-30"></img>
      </div>
    );
  }
  const get=Netflixmainlanguage[val];
  return (
    <div className="bg-black ">
      <div className="md:ml-10 ml-4 sm:ml-7 md:-mt-32 sm:mt-0 -mt-30 relative z-8 ">
        <Movielist Title={get.movielist1} movies={movies?.Nowplayingmovie} />
        <Movielist Title={get.movielist2} movies={movies?.toprated} />
        <Movielist Title={get.movielist3} movies={movies?.upcoming} />
        <Movielist Title={get.movielist4} movies={movies?.popular} />
      </div>
    </div>
  );
};

export default Secondarycontainer;
