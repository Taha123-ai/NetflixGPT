import { useEffect } from "react";
import { movie_api, options } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addtoprated } from "../utils/nowplayingmovieslice";

const useTopratedmovies = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store)=>store.movies.toprated);
  const gettopratedmovie = async () => {
    const response = await fetch(movie_api+"/top_rated", options);
    const json = await response.json();
    dispatch(addtoprated(json.results));
  };

  useEffect(() => {
    !movie && gettopratedmovie();
  }, []);
};

export default useTopratedmovies;
