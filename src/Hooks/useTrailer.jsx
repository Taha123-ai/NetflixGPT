import { useEffect } from "react";
import { options } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/nowplayingmovieslice";

const useTrailer = (key) => {
  const dispatch = useDispatch();
  const movie = useSelector((store)=>store.movies.Trailer);
  const videodata = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+key+"/videos?language=en-US",
      options,
    );
    const data = await response.json();
    const trialer = data.results?.filter((data) => {
      return data.type === "Trailer" ? data : data[0];
    });
    dispatch(addtrailer(trialer[0] || trialer));
  };
  useEffect(() => {
    !movie && videodata();
  }, []);
};

export default useTrailer;
