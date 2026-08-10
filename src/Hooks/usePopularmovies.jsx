import { useEffect } from "react";
import { movie_api, options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addpopular } from "../utils/nowplayingmovieslice";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const getpopularmovie = async () => {

    const response = await fetch(movie_api + "popular", options);

    const json = await response.json();

    dispatch(addpopular(json.results));
  };

  useEffect(() => {
    getpopularmovie();
  }, []);
};

export default usePopularmovies;
