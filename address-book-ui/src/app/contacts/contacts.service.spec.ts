import { fakeAsync, tick } from '@angular/core/testing';

import { of } from 'rxjs';

import { ContactsService } from './contacts.service';
import { loadContacts } from './store/actions';

describe('ContactsService', () => {
  let httpMock;
  let storeMock;
  let service: ContactsService;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);

    service = new ContactsService(httpMock, storeMock);
  });

  // service test example
  describe('loadContacts', () => {
    it('should call GET and dispatch received response', fakeAsync(() => {
      httpMock.get = jasmine.createSpy().and.returnValue(of([]));

      service.loadContacts();

      expect(httpMock.get).toHaveBeenCalledWith('https://localhost:44323/api/contacts');
      tick();
      expect(storeMock.dispatch).toHaveBeenCalledWith(loadContacts({ contacts: [] }));
    }));
  });
});
