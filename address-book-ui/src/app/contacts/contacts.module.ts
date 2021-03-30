import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactComponent } from './contact/contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ContactsRoutingModule],
  declarations: [
    ContactListComponent,
    NewContactComponent,
    ContactComponent,
    EditContactComponent,
  ],
})
export class ContactsModule {}
