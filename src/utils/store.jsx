import { configureStore } from "@reduxjs/toolkit";
import  userreducer  from "./userslice"
import moviesreducer from "./nowplayingmovieslice"
import configlangreducer from "./configlangslice"
import gptmoviesreducer from "./gptslice"
const store= configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer,
        configlang:configlangreducer,
        GPTmovies:gptmoviesreducer,
    }
})
export default store;