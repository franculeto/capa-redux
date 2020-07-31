import { Action } from '@ngrx/store';

export enum HomeStoreTypes {
  FETCH_PENDING_GET_COURSES = '[COURSES: PENDING GET COURSES]',
  FETCH_FULFILLED_GET_COURSES = '[COURSES: FULFILLED GET COURSES]',
  FETCH_ERROR_GET_COURSES = '[COURSES: ERROR GET COURSES]',
  CLEAR_DATA = '[COURSES] CLEAR DATA'
}

export class FetchPendingGetCourses implements Action {
  readonly type = HomeStoreTypes.FETCH_PENDING_GET_COURSES;
  constructor() {}
}

export class FetchFulfilledGetCourses implements Action {
  readonly type = HomeStoreTypes.FETCH_FULFILLED_GET_COURSES;
  constructor(public payload: any) {}
}

export class FetchErrorGetCourses implements Action {
  readonly type = HomeStoreTypes.FETCH_ERROR_GET_COURSES;
  constructor(public payload: any) {}
}

export class ClearDataCourses implements Action {
  readonly type = HomeStoreTypes.CLEAR_DATA;
}

export type HomeStoreActions =
  | FetchPendingGetCourses
  | FetchFulfilledGetCourses
  | FetchErrorGetCourses
  | ClearDataCourses;
