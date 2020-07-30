import { Injectable } from '@angular/core';
import { map, filter, take, concatMap, switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION, ROUTER_NAVIGATED } from '@ngrx/router-store';
import * as fromNavigationStore from './navigation-store.selectors';
import { AddToHistory, NavigationStoreActionsTypes } from './navigation-store.actions';
import { INavigationState } from './navigation-store.reducer';
import { Router } from '@angular/router';

@Injectable()
export class NavigationStoreEffects {

  constructor(
    private actions$: Actions,
    private storeNavigation$: Store<INavigationState>,
    private router: Router,
  ) { }

  destroy$ = new Subject();
  lastUrl: string;
  url: string;

  @Effect({ dispatch: false })
  public routerNavigation$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((resp: any) => {
      this.url = resp.payload.routerState.url;
      const urlIndexParam = this.url.indexOf('?');
      this.url = urlIndexParam > 0 ? this.url.substring(0, urlIndexParam) : this.url;
      this.storeNavigation$.dispatch(new AddToHistory({ url: String(this.url) }));
    })
  );

  @Effect({ dispatch: false })
  public routerNavigated$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map((action: any) => {
      let url = action.payload.routerState.url;
      const urlIndexParam = url.indexOf('?');
      url = urlIndexParam > 0 ? url.substring(0, urlIndexParam) : url;
      return this.storeNavigation$.dispatch(new AddToHistory({ url: String(action.payload.routerState.url) }));
    }),
  );

  @Effect({ dispatch: false }) navigateBack$ = this.actions$.pipe(
    ofType(NavigationStoreActionsTypes.NAVIGATE_BACK),
    switchMap(() => this.storeNavigation$.pipe(
      select(fromNavigationStore.selectActualPageUrl),
      take(1),
      tap(url => {
        this.router.navigate([url])

      }
      ))
    ));
}
