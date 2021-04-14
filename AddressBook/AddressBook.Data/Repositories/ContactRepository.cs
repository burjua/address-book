using AddressBook.Core.Models;
using AddressBook.Core.Repositories;
using System.Linq;

namespace AddressBook.Data.Repositories
{
    public class ContactRepository : Repository<Contact>, IContactRepository
    {
        public ContactRepository(ContactsDbContext context)
            : base(context)
        { }

        public bool EmailExists(string email)
        {
            return Context.Set<Contact>().Any(c => c.Email == email);
        }

        public bool AnotherContactWithEmailExists(int id, string email)
        {
            return Context.Set<Contact>().Any(c => c.Id != id && c.Email == email);
        }
    }
}
