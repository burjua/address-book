import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsService } from './contacts.service';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from './store/reducer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactExistsGuard } from './contact-exists-guard';
import { CanDeactivateGuard } from './can-deactivate-guard';

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
    ContactsRoutingModule,
    StoreModule.forRoot({ state: contactReducer }),
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
