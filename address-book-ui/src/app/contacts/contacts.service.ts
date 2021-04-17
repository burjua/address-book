import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Contact } from './contact.model';
import { loadContacts } from './store/actions';
import { IAppState } from './store/state';

const apiUrl = 'https://localhost:44323/api/contacts';

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  // returning promise from the function so APP_INITIALIZER will wait for it to resolve
  // before loading the application
  loadContacts(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get<Contact[]>(apiUrl).subscribe((contacts) => {
        this.store.dispatch(loadContacts({ contacts }));
      });
      resolve();
    });
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(apiUrl, contact);
  }

  updateContact(contact: Contact): Observable<void> {
    return this.http.put<void>(`${apiUrl}/${contact.id}`, contact);
  }
}
