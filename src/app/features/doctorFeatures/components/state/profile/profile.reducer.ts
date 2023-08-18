
import { createReducer, on,  Action } from "@ngrx/store";
import { initialState } from "./profile.state";
import { DoctorState } from "./profile.state";
import { loadDocProfileSuccess } from "./profile.action";


const _docProfileReducer = createReducer(
    initialState,
    on(loadDocProfileSuccess,(state,action)=>{
        return {
            ...state,
            doctors : action.doctor
        }
    })
)


export function docProfileReducer(state : DoctorState | undefined,action: Action){
    return _docProfileReducer(state,action);
}