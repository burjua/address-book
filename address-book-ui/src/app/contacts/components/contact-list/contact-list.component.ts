import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Contact } from '../../contact.model';
import { Observable } from 'rxjs';
import { IAppState } from '../../store/state';
import { getSortedContacts } from '../../store/selectors';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    // this.contacts$ = this.store.select((s) => s.state.contacts);
    this.contacts$ = this.store.select(getSortedContacts);
  }
}
