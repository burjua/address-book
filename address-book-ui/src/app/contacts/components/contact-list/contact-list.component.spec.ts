import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { Contact } from '../../contact.model';
import { ContactComponent } from '../contact/contact.component';
import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    const dummyContacts: Contact[] = [
      {
        id: 1,
        firstName: 'test',
        surname: 'tester',
        email: 'test@test.com',
        dob: '2000-01-01',
      },
      {
        id: 2,
        firstName: 'dummy',
        surname: 'tester',
        email: 'dummy@test.com',
        dob: '2000-01-01',
      },
    ];

    const mockStore = {
      select: () => {
        return of(dummyContacts);
      },
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ContactListComponent, ContactComponent],
      providers: [{ provide: Store, useValue: mockStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contacts', () => {
    expect(fixture.debugElement.queryAll(By.css('.contact.row')).length).toBe(2);
  });
});
