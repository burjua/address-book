import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
      declarations: [ContactFormComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('contact form', () => {
    it('should be invalid when empty', () => {
      expect(component.contactForm.valid).toBeFalsy();
    });
  });

  // test cases for email field
  describe('email field', () => {
    it('should be required', () => {
      const emailCtrl = component.contactForm.controls.email;

      emailCtrl.setValue('');
      expect(emailCtrl.hasError('required')).toBeTruthy();

      emailCtrl.setValue('test');
      expect(emailCtrl.hasError('required')).toBeFalsy();
    });

    it('should be a valid email', () => {
      const emailCtrl = component.contactForm.controls.email;

      emailCtrl.setValue('test');
      expect(emailCtrl.hasError('email')).toBeTruthy();

      emailCtrl.setValue('test@test.com');
      expect(emailCtrl.hasError('email')).toBeFalsy();
    });
  });
});
