using AddressBook.Core.Models;

namespace AddressBook.Core.Repositories
{
    public interface IContactRepository : IRepository<Contact>
    {
        bool EmailExists(string email);
        bool AnotherContactWithEmailExists(int id, string email);
    }
}
