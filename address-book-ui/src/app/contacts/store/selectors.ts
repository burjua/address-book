import { createFeatureSelector, createSelector } from '@ngrx/store';
import { orderBy } from 'lodash';

import { IState } from './state';

export const getContactsState = createFeatureSelector<IState>('state');

export const getSortedContacts = createSelector(getContactsState, (state: IState) => {
  return orderBy(state.contacts, 'surname');
});

export const getContactById = createSelector(getContactsState, (state: IState, id) => {
  return state.contacts.find((c) => c.id === id);
});
