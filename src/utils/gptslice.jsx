import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"GPT",
    initialState:{
        gpt:false,
        movies:null,
        result:null,
        tmdbrecommend:null,
    },
    reducers:{
        addgptmovies:(state,actions)=>{
            state.movies=actions.payload;
        },
        gptresult:(state,actions)=>{
            state.result=actions.payload;
        },
        setgptdata:(state,actions)=>{
            state.gpt=actions.payload;
        },
        settmdbgptdata:(state,actions)=>{
            state.tmdbrecommend=actions.payload;
        },
        removegptsliceitem:(state)=>{
            state.movies=null;
            state.result=null;
            state.tmdbrecommend=null;
        }
    }
})
export default gptslice.reducer;
export const {addgptmovies,gptresult,setgptdata,removegptsliceitem,settmdbgptdata}=gptslice.actions;