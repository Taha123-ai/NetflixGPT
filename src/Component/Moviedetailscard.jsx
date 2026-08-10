import {  useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Moviedetailscard = () => {
  const navigate = useNavigate();
  const { movieid } = useParams();
  const movies = useSelector((store) => store?.movies);
  const filtered = Object.values(movies) //get all object value
    .flat() //convert it into one array
    .find((movie) => movie.id === Number(movieid)); //find one by one
  console.log(filtered);
  const { poster_path, original_title, title, release_date, overview } =
    filtered;
  const movieTitle = title || original_title;

  const onClose=()=>{
    navigate("/main");
  }

     return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden overflow-y-auto rounded-2xl bg-[#181818] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition hover:bg-white hover:text-black"
        >
          ×
        </button>

        {/* Hero backdrop */}
        <div className="relative h-75 w-full md:h-105">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={movieTitle}
            className="h-full w-full object-cover"
          />

          {/* Dark gradients */}
          <div className="absolute inset-0 bg-linear-to-t from-[#181818] via-black/30 to-transparent" />

          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/20" />

          {/* Title on backdrop */}
          <div className="absolute bottom-8 left-8 max-w-2xl md:left-12">
            <h1 className="text-3xl font-extrabold drop-shadow-lg md:text-5xl">
              {movieTitle}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="relative px-6 pb-8 md:px-12">
          <div className=" flex flex-col gap-8 md:flex-row">

            {/* Poster */}
            <div className="w-52 shrink-0 pt-8 md:block">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={movieTitle}
                className="w-full rounded-lg shadow-2xl h-full"
              />
            </div>

            {/* Details */}
            <div className="flex-1 -mt-2 md:pt-20">

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="font-semibold text-green-400">
                  {Math.round(( 100) * 10)}% Match
                </span>

                <span className="text-gray-300">
                  {release_date?.slice(0, 4)}
                </span>

                <span className="rounded border border-gray-500 px-2 py-0.5 text-xs">
                  HD
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
                {overview || "No description available for this movie."}
              </p>

              {/* Original title */}
              {original_title && original_title !== title && (
                <p className="mt-5 text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">
                    Original title:
                  </span>{" "}
                  {original_title}
                </p>
              )}

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  className="flex items-center gap-2 rounded-md bg-white px-7 py-3 font-bold text-black transition hover:bg-gray-200"
                >
                  <span className="text-lg">▶</span>
                  Play
                </button>

                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-[#2a2a2a] text-xl transition hover:border-white hover:bg-[#3a3a3a]"
                  title="Add to My List"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Bottom information */}
          <div className="mt-10 grid gap-6 border-t border-gray-700 pt-7 text-sm md:grid-cols-3">
            <div>
              <p className="text-gray-500">Original Title</p>
              <p className="mt-1 text-gray-200">{original_title}</p>
            </div>

            <div>
              <p className="text-gray-500">Release Date</p>
              <p className="mt-1 text-gray-200">{release_date}</p>
            </div>

            <div>
              <p className="text-gray-500">Rating</p>
              <p className="mt-1 text-yellow-400">
                ⭐ N/A
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moviedetailscard;
