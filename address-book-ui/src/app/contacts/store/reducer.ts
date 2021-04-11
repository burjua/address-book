import { createReducer, on } from '@ngrx/store';
import { loadContacts, addContact, updateContact } from './actions';
import { IState } from './state';

export const initialState: IState = {
  contacts: [],
};

const _contactReducer = createReducer(
  initialState,
  on(loadContacts, (state, { contacts }) => ({ contacts: contacts })),
  on(addContact, (state, { contact }) => ({
    contacts: [...state.contacts, contact],
  })),
  on(updateContact, (state, { contact }) => ({
    contacts: [...state.contacts.filter((c) => c.id != contact.id), contact],
  }))
);

export function contactReducer(state, action) {
  return _contactReducer(state, action);
}
