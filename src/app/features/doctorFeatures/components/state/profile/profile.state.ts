import { DoctorData } from "src/app/interface/doctor";


  
  export interface DoctorState {
    doctors: DoctorData | null; // Use a union type with null
  }
  
  export const initialState: DoctorState = {
    doctors: null,
  };
  
  