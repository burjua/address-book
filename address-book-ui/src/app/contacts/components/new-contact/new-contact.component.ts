import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { addContact } from '../../store/actions';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Contact } from '../../contact.model';
import { IAppState } from '../../store/state';
import { ContactsService } from '../../contacts.service';
import { take, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactFormContainer } from '../contact-form-container';

@Component({
  selector: 'app-new-contact',
  templateUrl: '../contact-form-container.component.html',
})
export class NewContactComponent
  extends ContactFormContainer
  implements OnInit {
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
    this.error = '';

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
          this.error = errorResult.error;
        }
      );
  }
}
