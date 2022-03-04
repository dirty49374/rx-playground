import { AnyAction, createAction } from "@reduxjs/toolkit";

export const uiActions = {
  openMenu: createAction<boolean>('OPEN_MENU'),
  selectPropertyTab: createAction<PropertyTabs>('SELECT_PROPERTY_TAB'),
  selectRuntimeTab: createAction<RuntimeTabs>('SELECT_RUNTIME_TAB'),
  setError: createAction<string | undefined>('SET_ERROR'),
  setInspect: createAction<any>('SET_INSPECT'),
}

export type PropertyTabs = 'LOGS' | 'INSPECT' | 'ERROR';
export type RuntimeTabs = 'TIMELINE' | 'NOTE';

export type UIState = {
  menuOpen: boolean;
  error: Error | undefined;
  inspect: any;
  propertyTab: PropertyTabs;
  runtimeTab: RuntimeTabs;
}

const initialState: UIState = {
  menuOpen: false,
  error: undefined,
  inspect: undefined,
  propertyTab: 'LOGS',
  runtimeTab: 'NOTE',
}

export const uiReducer =
  (state: UIState = initialState, action: AnyAction): UIState => {
    switch (action.type) {
      case uiActions.openMenu.type:
        return { ...state, menuOpen: action.payload };
      case uiActions.selectPropertyTab.type:
        return { ...state, propertyTab: action.payload };
      case uiActions.selectRuntimeTab.type:
        return { ...state, runtimeTab: action.payload };
      case uiActions.setError.type:
        return { ...state, error: action.payload, propertyTab: 'ERROR' };
      case uiActions.setInspect.type:
        return { ...state, inspect: action.payload, propertyTab: 'INSPECT' };

      default:
        return state;
    }
  };
