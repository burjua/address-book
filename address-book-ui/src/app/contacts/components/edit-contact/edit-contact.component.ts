import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Contact } from '../../contact.model';
import { ContactsService } from '../../contacts.service';
import { updateContact } from '../../store/actions';
import { getContactById } from '../../store/selectors';
import { IAppState } from '../../store/state';
import { ContactFormContainer } from '../contact-form-container';

@Component({
  selector: 'app-edit-contact',
  templateUrl: '../contact-form-container.component.html',
})
export class EditContactComponent extends ContactFormContainer implements OnInit {
  constructor(
    router: Router,
    snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private contactService: ContactsService
  ) {
    super(router, snackBar);
  }

  ngOnInit(): void {
    this.title = 'Edit contact';

    this.route.paramMap.subscribe((params) => {
      this.store
        .select(getContactById, +params.get('id'))
        .pipe(take(1))
        .subscribe((contact) => {
          this.contact = contact;
        });
    });
  }

  onValidContact(contact: Contact): void {
    this.errors = undefined;

    this.contactService
      .updateContact(contact)
      .pipe(take(1))
      .subscribe(
        () => {
          // Success
          this.store.dispatch(updateContact({ contact: contact }));

          this.showSnackBar('Contact updated!');
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
