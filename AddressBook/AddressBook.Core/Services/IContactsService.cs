using AddressBook.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBook.Core
{
    public interface IContactsService
    {
        Task<IEnumerable<Contact>> GetAll();
        Task<Contact> GetById(int id);
        Task<Contact> Create(Contact contact);
        Task Update(Contact contact);
        bool EmailExists(string email);
        bool AnotherContactWithEmailExists(int id, string email);
    }
}
