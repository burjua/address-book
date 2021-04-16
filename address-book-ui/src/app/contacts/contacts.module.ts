import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactsService } from './contacts.service';
import { CanDeactivateGuard } from './routing/can-deactivate-guard';
import { ContactExistsGuard } from './routing/contact-exists-guard';
import { ContactsRoutingModule } from './routing/contacts-routing.module';
import { contactReducer } from './store/reducer';

export function init_app(contactsService: ContactsService) {
  return () => contactsService.loadContacts();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSnackBarModule,
    ContactsRoutingModule,
    StoreModule.forRoot({ state: contactReducer }),
    SharedModule,
  ],
  declarations: [
    ContactListComponent,
    NewContactComponent,
    ContactComponent,
    EditContactComponent,
    ContactFormComponent,
  ],
  providers: [
    ContactsService,
    ContactExistsGuard,
    CanDeactivateGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [ContactsService],
      multi: true,
    },
  ],
})
export class ContactsModule {}
