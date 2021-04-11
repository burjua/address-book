import { Contact } from '../contact.model';

export interface IAppState {
  state: IState;
}

export interface IState {
  contacts: Contact[];
}
