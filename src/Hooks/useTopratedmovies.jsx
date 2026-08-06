import { useEffect } from "react";
import { movie_api, options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addtoprated } from "../utils/nowplayingmovieslice";

const useTopratedmovies = () => {
  const dispatch = useDispatch();
  const gettopratedmovie = async () => {
    const response = await fetch(movie_api+"/top_rated", options);
    const json = await response.json();
    dispatch(addtoprated(json.results));
  };

  useEffect(() => {
    gettopratedmovie();
  }, []);
};

export default useTopratedmovies;
