import { docProfileReducer } from "../features/doctorFeatures/components/state/profile/profile.reducer"
import { DoctorState } from "../features/doctorFeatures/components/state/profile/profile.state"

export interface AppState {
    doctor : DoctorState
}

export const AppReducer = {
   doctor : docProfileReducer
}