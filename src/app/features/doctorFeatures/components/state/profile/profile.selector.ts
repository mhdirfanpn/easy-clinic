import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DoctorState } from "./profile.state";

const getDoctorFeatureState = createFeatureSelector<DoctorState>('doctor'); // Use 'doctor' instead of 'posts'


export const getProfile = createSelector(getDoctorFeatureState,state=>{
    return state.doctors
})

