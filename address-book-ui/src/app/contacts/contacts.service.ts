import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Contact } from './contact.model';
import { loadContacts } from './store/actions';
import { IAppState } from './store/reducer';

@Injectable()
export class ContactsService {
  data = [
    {
      firstName:
        'Firstslkjsldkjflakjhlksjdhflkjhalkjsdhlkfjhlkjasdhds mnsgskjdfhgsdlkfjghsldkfjghsldkfjghslkdjfghlskj',
      surname:
        'Sdfkjlasksdfjghdskfjg sjdflkjglsdkfjgk dfhkjghdvcdcifnsdfkghsdlkfjghslkdjfghlskdjfghlskdjfghlskdjfjf',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
    },
    {
      firstName: 'first',
      surname: 'surname',
      email: 'test@test.com',
      dob: 'DoB',
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
