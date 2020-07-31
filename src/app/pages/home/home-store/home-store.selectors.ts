import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHomeStore from './home-store.reducer';
export const selectHomeStoreState = createFeatureSelector<fromHomeStore.IHomeStore>('home');

export const selectState = createSelector(selectHomeStoreState, (state: fromHomeStore.IHomeStore) => {
  return state;
});
