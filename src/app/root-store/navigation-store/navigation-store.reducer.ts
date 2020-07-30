import { NavigationStoreActions, NavigationStoreActionsTypes } from './navigation-store.actions';
import * as cloneDeep from 'lodash/cloneDeep';

export interface INavigationState {
  urls: string[];
}

export const initialState: INavigationState = {
  urls: []
};

export function reducer(state = initialState, action: NavigationStoreActions): INavigationState {

  const newState = cloneDeep(state);

  switch (action.type) {

    case NavigationStoreActionsTypes.RESET_HISTORY:

      newState.urls = [];
      return newState;

    case NavigationStoreActionsTypes.ADD_TO_HISTORY:
      const lastUrl = newState.urls[newState.urls.length - 1];
      newState.urls = (lastUrl !== action.payload.url)  ? [...newState.urls, action.payload.url] : [...newState.urls];
      return newState;

    case NavigationStoreActionsTypes.NAVIGATE_BACK:
      if (newState.urls.length > 1) {
        newState.urls.pop();
      }
      return newState;

    case NavigationStoreActionsTypes.REMOVE_TO_HISTORY:
      if (newState.urls.length > 1) {
        newState.urls.pop();
      }
      return newState;

    default:
      return state;
  }
}
