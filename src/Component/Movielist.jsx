import Moviecard from "./Moviecard";

const Movielist = ({ Title, movies }) => {
  console.log(movies);

  return (
    <div className="my-8">
      <div className="text-xl font-sans font-bold text-zinc-300 mb-2">{Title}</div>
      <div className="flex flex-row overflow-x-auto  overflow-y-hidden items-center  scroll-smooth snap-x snap-mandatory touch-pan-x overscroll-x-contain scrollbar-none">
        {movies.map((movie) => {
           return <Moviecard key={movie.id} movies={movie} posterpath={movie.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default Movielist;
