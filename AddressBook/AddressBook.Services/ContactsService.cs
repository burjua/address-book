using AddressBook.Core;
using AddressBook.Core.Models;
using AddressBook.Core.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBook.Services
{
    public class ContactsService : IContactsService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ContactsService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public Task<IEnumerable<Contact>> GetAll()
        {
            return _unitOfWork.Contacts.GetAll();
        }

        public Task<Contact> GetById(int id)
        {
            return _unitOfWork.Contacts.GetById(id);
        }

        public async Task<Contact> Create(Contact contact)
        {
            await _unitOfWork.Contacts.AddAsync(contact);
            await _unitOfWork.CommitAsync();
            return contact;
        }

        public async Task Update(Contact contact)
        {
            await _unitOfWork.Contacts.UpdateAsync(contact);
            await _unitOfWork.CommitAsync();
        }

        public bool EmailExists(string email)
        {
            return _unitOfWork.Contacts.EmailExists(email);
        }

        public bool AnotherContactWithEmailExists(int id, string email)
        {
            return _unitOfWork.Contacts.AnotherContactWithEmailExists(id, email);
        }
    }
}
