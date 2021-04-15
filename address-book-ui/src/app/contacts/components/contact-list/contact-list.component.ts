import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Contact } from '../../contact.model';
import { getSortedContacts } from '../../store/selectors';
import { IAppState } from '../../store/state';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.contacts$ = this.store.select(getSortedContacts);
  }
}
