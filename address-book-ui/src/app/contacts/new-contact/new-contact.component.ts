import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { addContact } from '../store/actions';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from '../contact.model';
import { IAppState } from '../store/state';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss'],
})
export class NewContactComponent implements OnInit {
  private hasChanges = false;

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit(): void {}

  onValidContact(contact: Contact): void {
    contact.id = Math.floor(Math.random() * 10000);

    // console.log('NewContactComponent contact', contact);

    this.store.dispatch(addContact({ contact: contact }));

    this.router.navigate(['/contacts']);
  }

  onHasChanges(hasChanges: boolean): void {
    this.hasChanges = hasChanges;
  }

  // TODO: refactor duplicate
  canDeactivate(): Observable<boolean> | boolean {
    // TODO
    if (this.hasChanges) {
      const result = window.confirm(
        'You have unsaved changes, do you want to proceed?'
      );
      return result;
    }
    return true;
  }
}
