import { Action } from '@ngrx/store';

export enum NavigationStoreActionsTypes {
  RESET_HISTORY = '[NAVIGATION STORE: HISTORY RESET]',
  ADD_TO_HISTORY = '[NAVIGATION STORE: ADD TO HISTORY]',
  REMOVE_TO_HISTORY = '[NAVIGATION STORE: REMOVE TO HISTORY]',
  NAVIGATE_BACK = '[NAVIGATION STORE: NAVIGATE BACK STEP]',
  NAVIGATE_NEXT = '[NAVIGATION STORE: NAVIGATE NEXT STEP]'
}

export class HistoryReset implements Action {
  readonly type = NavigationStoreActionsTypes.RESET_HISTORY;
  constructor() {}
}

export class AddToHistory implements Action {
  readonly type = NavigationStoreActionsTypes.ADD_TO_HISTORY;
  constructor(public payload: { url: string}) {}
}

export class NavigateBack implements Action {
  readonly type = NavigationStoreActionsTypes.NAVIGATE_BACK;
  constructor() {}
}

export class RemoveToHistory implements Action {
  readonly type = NavigationStoreActionsTypes.REMOVE_TO_HISTORY;
  constructor() {}
}

export type NavigationStoreActions =
  HistoryReset |
  AddToHistory |
  RemoveToHistory |
  NavigateBack;
