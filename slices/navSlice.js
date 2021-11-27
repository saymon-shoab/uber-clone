import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orgin: null,
    description: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
       name: 'nav',
       initialState,
       reducer:{
           setOrigin:(state, action)=>{
               state.orgin = action.payload
           },
           setDescription:(state, action)=>{
               state.description = action.payload
           },
           setTracvelTimeInformation:(state,action) =>{
               state.travelTimeInformation = action.payload
           }
       }
})


export const {setOrigin, setDescription, setTracvelTimeInformation} =navSlice.actions

export const selectOrgin = (state) => state.nav.orgin
export const selectDescription = (state) => state.nav.description
export const selectTracvelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer