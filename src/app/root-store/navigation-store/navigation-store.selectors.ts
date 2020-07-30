import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNavigationStore from './navigation-store.reducer';

export const selectAppStoreState = createFeatureSelector<fromNavigationStore.INavigationState>('navigationHistory');

export const selectNavigationHistory = createSelector(selectAppStoreState, (state: fromNavigationStore.INavigationState) => {
  return state.urls;
});

export const selectActualPageUrl = createSelector(selectAppStoreState, (state: fromNavigationStore.INavigationState) => {
  return state.urls[state.urls.length - 1];
});
export const selectComesFrom = createSelector(selectAppStoreState, (state: fromNavigationStore.INavigationState) => {
  return state.urls[state.urls.length - 2] || null;
});
