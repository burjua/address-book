import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { ContactsService } from '../../contacts.service';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { EditContactComponent } from './edit-contact.component';

describe('EditContactComponent', () => {
  let component: EditContactComponent;
  let fixture: ComponentFixture<EditContactComponent>;

  beforeEach(async () => {
    const routeParamMapMock = {
      get(): string {
        return '123';
      },
    };

    const routeMock = {
      paramMap: of(routeParamMapMock),
    } as any;

    const storeMock = {
      select: () => {
        return of({});
      },
      dispatch: () => {},
    };

    const snackBarMock = {};

    const routerMock = {};

    const serviceMock = {};

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
      declarations: [EditContactComponent, ContactFormComponent],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: MatSnackBar, useValue: snackBarMock },
        { provide: ContactsService, useValue: serviceMock },
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: storeMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
