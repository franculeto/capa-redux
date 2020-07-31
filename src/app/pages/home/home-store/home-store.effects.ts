import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HomeStoreTypes } from './home-store.actions';
import { HomeService } from '../services/home.service';

@Injectable()
export class HomeStoreEffects {
  constructor(
    private actions$: Actions,
    private homeService: HomeService,
  ) { }

  @Effect() getCourses$ = this.actions$
    .pipe(ofType(HomeStoreTypes.FETCH_PENDING_GET_COURSES))
    .pipe(
      map((action: any) => action.payload),
      switchMap((param) => {
        debugger
        return this.homeService.getCourses().pipe(
          map(response => ({ type: HomeStoreTypes.FETCH_FULFILLED_GET_COURSES, payload: response })),
          catchError((err: HttpErrorResponse) => of({ type: HomeStoreTypes.FETCH_ERROR_GET_COURSES, payload: err }))
        );
      })
    );
}
