import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { addContact, loadContacts, updateContact } from './actions';
import { IState } from './state';

export const initialState: IState = {
  contacts: [],
};

const reducer = createReducer(
  initialState,
  on(loadContacts, (state, { contacts }) => ({ contacts })),
  on(addContact, (state, { contact }) => ({
    contacts: [...state.contacts, contact],
  })),
  on(updateContact, (state, { contact }) => ({
    contacts: [...state.contacts.filter((c) => c.id !== contact.id), contact],
  }))
);

export function contactReducer(state, action): any {
  return reducer(state, action);
}
