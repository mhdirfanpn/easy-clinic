import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { DoctorService } from "../../../service/doctor.service";
import { map, mergeMap } from 'rxjs/operators';
import { loadDocProfile, loadDocProfileSuccess } from './profile.action';
import { DoctorData } from 'src/app/interface/doctor';


@Injectable()
export class docProfileEffects {

  constructor(private actions$: Actions, private doctorService: DoctorService) {}

  loadProfile = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDocProfile),
      mergeMap(() => {
        return this.doctorService.getDetails().pipe(
          map((doctor: DoctorData) => {
            return loadDocProfileSuccess({ doctor });
          })
        );
      })
    );
  });
}
