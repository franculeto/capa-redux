import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCourses from './home-store/home-store.reducer';
import { HomeStoreEffects } from './home-store/home-store.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('home', fromCourses.reducer),
    EffectsModule.forFeature([HomeStoreEffects]),
  ]
})
export class HomeModule { }
