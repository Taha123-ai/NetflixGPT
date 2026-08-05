import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        adduser:(state,action)=>{
            return action.payload;
        },
        removeuser:()=>{
            return null;
        }
    }
})
export default userslice.reducer;
export const {adduser,removeuser}=userslice.actions;