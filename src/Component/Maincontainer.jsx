import { useSelector } from "react-redux"
import Titlecontainer from "./Titlecontainer"
import Videocontainer from "./Videocontainer"

const Maincontainer = () => {
  const movies = useSelector((store)=>{ return store.movies?.Nowplayingmovie});
  if(movies===null) return;

  // console.log(movies[0]);
  const {title,overview,id}=movies[0];
  
  return (
    <div>
      <Titlecontainer title={title}  bio={overview}/>
      <Videocontainer id={id}/>
    </div>
  )
}

export default Maincontainer