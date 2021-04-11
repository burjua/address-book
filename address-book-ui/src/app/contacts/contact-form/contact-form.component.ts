import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { Contact } from '../contact.model';
import * as moment from 'moment';
import { cloneDeep, isEqual } from 'lodash';

const MY_FORMATS = {
  parse: {
    // dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onValidContact = new EventEmitter<Contact>();
  @Output() hasChanges = new EventEmitter<boolean>();

  contactForm: FormGroup;
  yesterday: Date;
  formHasChanges = false;

  private originalContact: Contact;
  readonly maxLength = 100;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.originalContact = cloneDeep(this.contact);
    // console.log('this.originalContact', this.originalContact);

    this.yesterday = new Date();
    this.yesterday.setDate(this.yesterday.getDate() - 1);

    this.contactForm = this.formBuilder.group({
      firstName: [
        this.contact ? this.contact.firstName : null,
        [Validators.required, Validators.maxLength(this.maxLength)],
      ],
      surname: [
        this.contact ? this.contact.surname : null,
        [Validators.required, Validators.maxLength(this.maxLength)],
      ],
      email: [
        this.contact ? this.contact.email : null,
        [Validators.required, Validators.email],
      ],
      dob: [this.contact ? this.contact.dob : null, Validators.required],
    });

    this.contactForm.valueChanges.subscribe((formValue) => {
      this.formHasChanges = !isEqual(
        this.serializeForm(),
        this.originalContact
      );
      this.hasChanges.emit(this.formHasChanges);

      // console.log('form value changed', formValue);
      // console.log('hasChanges', has);
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contact = this.serializeForm();
      // console.log('ContactFormComponent contact: ', contact);
      this.onValidContact.emit(contact);
    }
  }

  private serializeForm(): Contact {
    return {
      id: this.contact ? this.contact.id : undefined,
      firstName: this.contactForm.value.firstName,
      surname: this.contactForm.value.surname,
      email: this.contactForm.value.email,
      dob: moment(this.contactForm.value.dob).format('YYYY-MM-DD'),
    };
  }
}