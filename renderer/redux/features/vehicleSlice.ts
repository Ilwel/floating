import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatusType } from "../../components/main/status";

export interface VehicleInterface {
  plate: string
  status: StatusType
}

const initialState = {
  plate: "",
  status: "PERNOITE"
} as VehicleInterface

export const vehicleSlice =  createSlice({
  name:'file',
  initialState,
  reducers:{
    set:(state, action: PayloadAction<VehicleInterface>) => {
      state.plate = action.payload.plate
      state.status = action.payload.status
    },
    reset:(state) => {
      state.plate = initialState.plate
      state.status = initialState.status
    }
  }
})

export const {
  set,
  reset
} = vehicleSlice.actions

export default vehicleSlice.reducer