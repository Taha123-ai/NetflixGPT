import { configureStore } from "@reduxjs/toolkit";
import  userreducer  from "./userslice"
import moviesreducer from "./nowplayingmovieslice"
import configlangreducer from "./configlangslice"
const store= configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer,
        configlang:configlangreducer,
    }
})
export default store;