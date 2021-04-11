import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IState } from './state';

export const getContactsState = createFeatureSelector<IState>('state');

export const getContactById = createSelector(
  getContactsState,
  (state: IState, props) => {
    return state.contacts.find((c) => c.id === props.id);
  }
);

export const contactExists = createSelector(
  getContactsState,
  (state: IState, props) => {
    return !!state.contacts.find((c) => c.id === props.id);
  }
);
