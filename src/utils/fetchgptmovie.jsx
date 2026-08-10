import { options } from "./const";


//helper function..
const fetchgptmovie = async (movie) => {


  const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie
        +"&include_adult=false&language=en-US&page=1",
      options,
    );
  const json =await response.json();  
  return json.results;
}

export default fetchgptmovie