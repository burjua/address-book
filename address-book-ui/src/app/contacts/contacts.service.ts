import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Contact } from './contact.model';
import { loadContacts } from './store/actions';
import { IAppState } from './store/state';

@Injectable()
export class ContactsService {
  data = [
    {
      id: 0,
      firstName: 'Test',
      surname: 'Testerson',
      email: 'test@test.com',
      dob: '2021-01-01',
    },
  ];

  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  loadContacts(): void {
    this.store.dispatch(loadContacts({ contacts: this.data }));

    // this.http.get<Contact[]>('/api/contacts').subscribe((contacts) => {
    //   this.store.dispatch(loadContacts({ contacts: contacts }));
    // });
  }
}
