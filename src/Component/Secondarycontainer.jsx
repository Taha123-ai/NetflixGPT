import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store?.movies);
  const { Nowplayingmovie, toprated, Trailer, upcoming, popular } =
    movies || {};

  if (!Nowplayingmovie || !toprated || !Trailer || !upcoming || !popular) {
    return (
      <div className="h-screen w-screen">
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=982558843711490184"
          frameborder="0"
          scrolling="no"
          className="h-full w-full scale-100"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="ml-10 -mt-32 relative z-8">
        <Movielist Title={"Now playing"} movies={movies?.Nowplayingmovie} />
        <Movielist Title={"Toprated"} movies={movies?.toprated} />
        <Movielist Title={"Upcoming"} movies={movies?.upcoming} />
        <Movielist Title={"Popular"} movies={movies?.popular} />
      </div>
    </div>
  );
};

export default Secondarycontainer;
