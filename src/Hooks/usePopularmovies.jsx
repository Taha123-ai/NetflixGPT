import { useEffect } from "react";
import { movie_api, options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addpopular } from "../utils/nowplayingmovieslice";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const getpopularmovie = async () => {
    console.log("fetching");

    const response = await fetch(movie_api + "popular", options);
    console.log("response came");

    const json = await response.json();
    console.log("json came");

    dispatch(addpopular(json.results));
    console.log("dispatched success");
  };

  useEffect(() => {
    console.log("usepopular mounted");
    getpopularmovie();
  }, []);
};

export default usePopularmovies;
