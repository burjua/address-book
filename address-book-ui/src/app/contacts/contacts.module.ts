import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsService } from './contacts.service';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from './store/reducer';

export function init_app(contactsService: ContactsService) {
  return () => contactsService.loadContacts();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ContactsRoutingModule,
    StoreModule.forRoot({ state: contactReducer }),
  ],
  declarations: [
    ContactListComponent,
    NewContactComponent,
    ContactComponent,
    EditContactComponent,
  ],
  providers: [
    ContactsService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [ContactsService],
      multi: true,
    },
  ],
})
export class ContactsModule {}
