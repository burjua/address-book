import { createAction, props } from '@ngrx/store';
import { Contact } from '../contact.model';

export const loadContacts = createAction(
  '[] Load Contacts',
  props<{ contacts: Contact[] }>()
);

export const addContact = createAction(
  '[] Add Contact',
  props<{ contact: Contact }>()
);
