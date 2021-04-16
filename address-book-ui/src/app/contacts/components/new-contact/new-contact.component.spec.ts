import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';

import { ContactsService } from '../../contacts.service';
import { addContact } from '../../store/actions';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { NewContactComponent } from './new-contact.component';

describe('NewContactComponent', () => {
  let serviceMock;
  let storeMock;
  let snackBarMock;
  let routerMock;

  let component: NewContactComponent;
  let fixture: ComponentFixture<NewContactComponent>;

  const dummyContact = {
    id: undefined,
    firstName: 'dummy',
    surname: 'tester',
    email: 'dummy@test.com',
    dob: '2000-01-01',
  };

  beforeEach(async () => {
    storeMock = {
      select: () => {
        return of({});
      },
      dispatch: jasmine.createSpy(),
    };

    snackBarMock = jasmine.createSpyObj('MatSnackBar', ['open']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    serviceMock = jasmine.createSpyObj('ContactsService', ['createContact']);

    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
      declarations: [NewContactComponent, ContactFormComponent],
      providers: [
        FormBuilder,
        { provide: MatSnackBar, useValue: snackBarMock },
        { provide: ContactsService, useValue: serviceMock },
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: storeMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  describe('onValidContact', () => {
    it('should call createContact method on service', () => {
      serviceMock.createContact = jasmine.createSpy().and.returnValue(of({}));

      component.onValidContact(dummyContact);
      expect(serviceMock.createContact).toHaveBeenCalledWith(dummyContact);
    });

    it('should dispatch action, show snackBar and navigate away on success', fakeAsync(() => {
      serviceMock.createContact = jasmine.createSpy().and.returnValue(of({}));

      component.onValidContact(dummyContact);
      tick();
      expect(storeMock.dispatch).toHaveBeenCalledWith(addContact({ contact: {} as any }));
      expect(snackBarMock.open).toHaveBeenCalled();
      expect(routerMock.navigate).toHaveBeenCalled();
    }));

    it('should display errors on error', fakeAsync(() => {
      serviceMock.createContact = jasmine
        .createSpy()
        .and.returnValue(throwError({ error: [{ errorMessage: 'error1' }, { errorMessage: 'error2' }] }));

      component.onValidContact(dummyContact);
      tick();
      expect(storeMock.dispatch).not.toHaveBeenCalled();
      expect(snackBarMock.open).not.toHaveBeenCalled();
      expect(routerMock.navigate).not.toHaveBeenCalled();
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('.alert.alert-danger')).length).toBe(2);
    }));
  });
});
