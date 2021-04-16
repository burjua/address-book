import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Contact } from '../../contact.model';
import { ContactsService } from '../../contacts.service';
import { addContact } from '../../store/actions';
import { IAppState } from '../../store/state';
import { ContactFormContainer } from '../contact-form-container';

@Component({
  selector: 'app-new-contact',
  templateUrl: '../contact-form-container.component.html',
})
export class NewContactComponent extends ContactFormContainer implements OnInit {
  constructor(
    router: Router,
    snackBar: MatSnackBar,
    private store: Store<IAppState>,
    private contactService: ContactsService
  ) {
    super(router, snackBar);
  }

  ngOnInit(): void {
    this.title = 'New contact';
  }

  onValidContact(contact: Contact): void {
    this.errors = undefined;

    this.contactService
      .createContact(contact)
      .pipe(take(1))
      .subscribe(
        (createdContact) => {
          // Success
          this.store.dispatch(addContact({ contact: createdContact }));

          this.showSnackBar('New contact created!');
          this.navigateHome();
        },
        (errorResult) => {
          // Error
          // error is an array of errors returned by fluent validation on backend
          this.errors = errorResult.error;
        }
      );
  }
}
