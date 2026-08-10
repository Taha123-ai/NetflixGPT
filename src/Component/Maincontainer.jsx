import { useSelector } from "react-redux"
import Titlecontainer from "./Titlecontainer"
import Videocontainer from "./Videocontainer"

const Maincontainer = ({val}) => {
  const movies = useSelector((store)=>{ return store.movies?.Nowplayingmovie});
  if(movies===null) return;

  const {title,overview,id}=movies[0];
  
  return (
    <div>
      <Titlecontainer title={title}  bio={overview} val={val}/>
      <Videocontainer id={id}/>
    </div>
  )
}
export default Maincontainer