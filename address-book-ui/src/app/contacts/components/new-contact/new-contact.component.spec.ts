import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { ContactsService } from '../../contacts.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NewContactComponent } from './new-contact.component';

describe('NewContactComponent', () => {
  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  beforeEach(async () => {
    const mockStore = {
      select: () => {
        return of({});
      },
      dispatch: () => {},
    };

    const snackBarMock = {
      // open: () => {},
    };

    const routerMock = {};

    const serviceMock = {
      // post: () => {},
    };

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
      declarations: [NewContactComponent, ContactFormComponent],
      providers: [
        FormBuilder,
        { provide: MatSnackBar, useValue: snackBarMock },
        { provide: ContactsService, useValue: serviceMock },
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: mockStore },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
