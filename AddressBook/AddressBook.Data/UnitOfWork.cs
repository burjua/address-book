using AddressBook.Core.Repositories;
using AddressBook.Data.Repositories;
using System.Threading.Tasks;

namespace AddressBook.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ContactsDbContext _context;
        private ContactRepository _contactRepository;

        public UnitOfWork(ContactsDbContext context)
        {
            this._context = context;
        }

        public IContactRepository Contacts => _contactRepository = _contactRepository ?? new ContactRepository(_context);

        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
