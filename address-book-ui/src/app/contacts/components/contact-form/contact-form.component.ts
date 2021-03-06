import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { isEqual } from 'lodash-es';
import * as moment from 'moment';

import { Contact } from '../../contact.model';

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
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
  @Output() contactSubmitted = new EventEmitter<Contact>();
  @Output() formChanged = new EventEmitter<boolean>();

  contactForm: FormGroup;
  today = new Date();
  hasChanges = false;

  readonly maxLength = 100;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: [
        this.contact ? this.contact.firstName : null,
        [Validators.required, Validators.maxLength(this.maxLength)],
      ],
      surname: [
        this.contact ? this.contact.surname : null,
        [Validators.required, Validators.maxLength(this.maxLength)],
      ],
      email: [this.contact ? this.contact.email : null, [Validators.required, Validators.email]],
      dob: [this.contact ? this.contact.dob : null, Validators.required],
    });

    this.contactForm.valueChanges.subscribe((formValue) => {
      this.hasChanges = !isEqual(this.serializeForm(), this.contact);
      this.formChanged.emit(this.hasChanges);
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contact = this.serializeForm();
      this.contactSubmitted.emit(contact);
    }
  }

  private serializeForm(): Contact {
    return {
      id: this.contact ? this.contact.id : undefined,
      firstName: this.contactForm.value.firstName,
      surname: this.contactForm.value.surname,
      email: this.contactForm.value.email,
      // utc(true) to avoid timezone offset. As we only need date, we don't care about timezones
      dob: moment(this.contactForm.value.dob).utc(true).toISOString(),
    };
  }
}
