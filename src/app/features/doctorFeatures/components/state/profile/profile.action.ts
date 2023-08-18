import { createAction, props } from "@ngrx/store"
import { DoctorData } from "src/app/interface/doctor";


export const LOAD_DOC_PROFILE = '[doctor profile page] load profile'
export const LOAD_DOC_PROFILE_SUCCESS = '[doctor profile page] load profile success'
export const loadDocProfile= createAction(LOAD_DOC_PROFILE)

export const loadDocProfileSuccess = createAction(LOAD_DOC_PROFILE_SUCCESS, props<{ doctor: DoctorData }>());