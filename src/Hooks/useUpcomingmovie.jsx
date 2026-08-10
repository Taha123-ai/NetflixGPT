import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movie_api, options } from "../utils/const";
import { addupcoming } from "../utils/nowplayingmovieslice";

const useUpcomingmovie = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store)=>store.movies.upcoming)
  const gettopratedmovie = async () => {
    const response = await fetch(movie_api + "/upcoming", options);
    const json = await response.json();
    dispatch(addupcoming(json.results));
  };

  useEffect(() => {
   !movie &&  gettopratedmovie();
  }, []);
};

export default useUpcomingmovie;
