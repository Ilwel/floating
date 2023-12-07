import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ScreenInterface {
  minimal: boolean
}

const initialState = {
  minimal: false
} as ScreenInterface

export const ScreenSlice =  createSlice({
  name:'screen',
  initialState,
  reducers:{
    set:(state, action: PayloadAction<ScreenInterface>) => {
      state.minimal = action.payload.minimal
    },
    reset:(state) => {
      state.minimal = initialState.minimal
    }
  }
})

export const {
  set,
  reset
} = ScreenSlice.actions

export default ScreenSlice.reducer