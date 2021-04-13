import { Component, Input, OnInit } from '@angular/core';

import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact = {} as Contact;
  initials = '';

  constructor() {}

  ngOnInit(): void {
    this.initials = this.getInitials(this.contact);
  }

  private getInitials(contact: Contact): string {
    return `${contact.firstName.substring(0, 1).toUpperCase()}${contact.surname.substring(0, 1).toUpperCase()}`;
  }
}
