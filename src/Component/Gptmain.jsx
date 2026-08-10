import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addgptmovies, gptresult, settmdbgptdata } from "../utils/gptslice";
import usegptresult from "../Hooks/usegptresult";
import fetchgptmovie from "../utils/fetchgptmovie";
import Movielist from "./Movielist";
import Shimmer from "./Shimmer";
import Netflixmainlanguage from "../utils/netflixmainlanguage";

const Gptmain = () => {
  const language=useSelector((store)=> store?.configlang.Lang);
  const [loading, setloading] = useState(false);
  const searchref = useRef(null);
  const dispatch = useDispatch();
  const Title = useSelector((store) => {
    return store?.GPTmovies?.result;
  });

  const Tmdbmovies = useSelector((store) => {
    return store?.GPTmovies?.tmdbrecommend;
  });

  async function senddata() {
    setloading(true);
    try {
      dispatch(addgptmovies(searchref.current.value));
      const result = await usegptresult(searchref.current.value);
      const resultarray = result?.split(",");
      dispatch(gptresult(resultarray));

      const moviefromtmdb = await Promise.all(
        resultarray.map((movie) => fetchgptmovie(movie)),
      );
      dispatch(settmdbgptdata(moviefromtmdb));
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  return (
    <div
      className="
      pb-10  
      min-h-screen
      text-white
      bg-[#050505]
      bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.22),transparent_45%),linear-gradient(to_bottom,#050505_0%,#0d0d0d_45%,#141414_100%)]"
    >
      <div className="relative top-24 z-8 inset-0">
        <div className="w-full px-4 sm:px-6">
          <div className="mx-auto w-full max-w-4xl">
            <div
              className="
               flex flex-col sm:flex-row
               items-stretch sm:items-center
               gap-2
              rounded-2xl
              border border-white/10
              bg-[#151515]
              p-1
              shadow-[0_15px_40px_rgba(0,0,0,0.45)]
              transition-all duration-300
              focus-within:border-white/20
              focus-within:shadow-[0_20px_70px_rgba(0,0,0,0.6)]
       "
            >
              {/* Input */}
              <div className="flex-1">
                <input
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      senddata();
                    }
                  }}
                  ref={searchref}
                  type="text"
                  placeholder="Ask NetflixGPT..."
                  className="
                  h-12 w-full
                  rounded-xl
                  bg-transparent
                  px-5
                  text-base sm:text-lg
                  text-red-400
                  placeholder:text-gray-500
                  outline-none
                "
                />
              </div>

              {/* Search Button */}
              <button
                onClick={senddata}
                className="
                  flex h-10 sm:h-14
                  w-full sm:w-auto
                  min-w-32
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-white
                   px-5
                   text-sm sm:text-base
                   font-semibold
                   text-black
                   transition-all duration-200
                   hover:bg-gray-200
                 hover:text-red-500
                 active:scale-[0.97]
                  cursor-pointer
                     
              "
              >
                <span>{Netflixmainlanguage[language].searchgptheader}</span>

                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-gray-300">
              {Netflixmainlanguage[language].gptpara}
            </p>
          </div>
        </div>
      </div>
      {loading ? (
        <>
          <div className=" mt-20 relative z-8">
            <Shimmer />
          </div>
        </>
      ) : (
        <div className="mx-50 mt-20 relative z-8 ">
          {Tmdbmovies?.map((tmdbmovie, index) => (
            <Movielist
              Title={Title[index]}
              key={Title[index]}
              movies={tmdbmovie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gptmain;
