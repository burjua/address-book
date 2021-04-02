import { createReducer, on } from '@ngrx/store';
import { Contact } from '../contact.model';
import { loadContacts, addContact } from './actions';

export interface IAppState {
  state: IState;
}

export interface IState {
  contacts: Contact[];
}

export const initialState: IState = {
  contacts: [],
};

const _contactReducer = createReducer(
  initialState,
  on(loadContacts, (state, { contacts }) => ({ contacts: contacts })),
  on(addContact, (state, { contact }) => ({
    contacts: [...state.contacts, contact],
  }))
);

export function contactReducer(state, action) {
  return _contactReducer(state, action);
}
