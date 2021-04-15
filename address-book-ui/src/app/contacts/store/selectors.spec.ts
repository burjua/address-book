import * as selectors from './selectors';

// selector test example

describe('getSortedContacts', () => {
  const dummyState = {
    contacts: [
      {
        id: 1,
        firstName: 'test',
        surname: 'testerson',
        email: 'test@test.com',
        dob: '2000-01-01',
      },
      {
        id: 2,
        firstName: 'dummy',
        surname: 'dummy',
        email: 'dummy@test.com',
        dob: '2000-01-01',
      },
    ],
  };

  it('Should return contacts sorted by surname', () => {
    const result = selectors.getSortedContacts.projector(dummyState);

    expect(result.length).toEqual(2);
    const indexOfDummy = result.findIndex((c) => c.firstName === 'dummy');
    expect(indexOfDummy).toEqual(0);
  });
});
