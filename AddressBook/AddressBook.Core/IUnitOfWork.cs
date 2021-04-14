using System;
using System.Threading.Tasks;

namespace AddressBook.Core.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        IContactRepository Contacts { get; }
        Task<int> CommitAsync();
    }
}
