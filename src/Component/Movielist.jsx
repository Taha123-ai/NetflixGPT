import Moviecard from "./Moviecard";

const Movielist = ({ Title, movies }) => {
  return (
    <div className="py-4">
      <div className="text-xl font-sans font-bold text-zinc-300 mb-3">
        {Title}
      </div>
      <div className="flex flex-row overflow-x-auto  overflow-y-hidden items-center  scroll-smooth snap-x snap-mandatory touch-pan-x overscroll-x-contain scrollbar-none">
        {movies
          ?.filter((movie) => movie?.poster_path)
          .map((movie) => {
            return (
              <Moviecard
                key={movie.id}
                movies={movie}
                posterpath={movie.poster_path}
                id={movie.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Movielist;
