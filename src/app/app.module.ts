import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDataModule } from './pages/personal-data/personal-data.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NavigationStoreEffects } from './root-store/navigation-store/navigation-store.effects';
import { reducer as navReducer } from './root-store/navigation-store/navigation-store.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { routerReducer, RouterReducerState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { storeFreeze } from 'ngrx-store-freeze';

// export interface RouterStateUrl {
//   url: string;
//   queryParams: Params;
//   params: Params;
// }

// export interface AppState {
//   router: RouterReducerState<RouterStateUrl>;
// }

// export const reducers: ActionReducerMap<AppState> = {
//   router: routerReducer,
// };

// export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {

//   serialize(routerState: RouterStateSnapshot): RouterStateUrl {
//     const { url } = routerState;
//     const { queryParams } = routerState.root;
//     let state: ActivatedRouteSnapshot = routerState.root;

//     while (state.firstChild) {
//       state = state.firstChild;
//     }
//     const { params } = state;

//     return { url, queryParams, params };
//   }
// }

//export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonalDataModule,
    HomeModule,
    StoreModule.forRoot({ navigationHistory: navReducer }),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
    EffectsModule.forRoot([NavigationStoreEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),

  ],
  // providers: [
  //   {
  //     provide: RouterStateSerializer,
  //     useClass: CustomSerializer,
  //   },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
