import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Contact } from '../contact.model';
import { IAppState } from '../store/reducer';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store
      .select((s) => s.state.contacts)
      .subscribe((contacts) => {
        // console.log('contacts: ', contacts);
        this.contacts = contacts;
      });
  }
}
