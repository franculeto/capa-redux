import { HomeStoreTypes, HomeStoreActions } from './home-store.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface IHomeStore {
  data: string[];
  pending: boolean;
  error: boolean;
  errorInfo: HttpErrorResponse;
  isFetchCompleted: boolean;
  typeRequest: string;
}

export const initialState: IHomeStore = {
  data: null,
  pending: null,
  error: null,
  errorInfo: null,
  isFetchCompleted: null,
  typeRequest: 'get'
};

export function reducer(state = initialState, action: HomeStoreActions): IHomeStore {
  switch (action.type) {
    case HomeStoreTypes.FETCH_PENDING_GET_COURSES:
      return {
        ...state,
        pending: true,
        isFetchCompleted: false,
        error: false,
      };

    case HomeStoreTypes.FETCH_FULFILLED_GET_COURSES:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload
      };

    case HomeStoreTypes.FETCH_ERROR_GET_COURSES:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        errorInfo: action.payload
      };

    case HomeStoreTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
