import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ContactsService } from './contacts.service';
import { MaterialModule } from './material.module';
import { CanDeactivateGuard } from './routing/can-deactivate-guard';
import { ContactExistsGuard } from './routing/contact-exists-guard';
import { ContactsRoutingModule } from './routing/contacts-routing.module';
import { contactReducer } from './store/reducer';

export function init_app(contactsService: ContactsService): any {
  return () => contactsService.loadContacts();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
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
