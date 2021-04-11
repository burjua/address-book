import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { getContactById } from '../store/selectors';
import { IAppState } from '../store/state';
import { addContact, updateContact } from '../store/actions';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  contact: Contact; // TEMP

  private hasChanges = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      // console.log('ID from paramMap: ', id);

      this.store.select(getContactById, { id }).subscribe((contact) => {
        // console.log('EditContactComponent contact from store: ', contact);
        this.contact = contact;
      });
    });
  }

  onValidContact(contact: Contact): void {
    // console.log('EditContactComponent contact', contact);
    this.store.dispatch(updateContact({ contact: contact }));

    this.router.navigate(['/contacts']);
  }

  onHasChanges(hasChanges: boolean): void {
    this.hasChanges = hasChanges;
  }

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
