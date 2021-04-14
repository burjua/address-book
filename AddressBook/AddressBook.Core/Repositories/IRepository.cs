using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBook.Core.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<IEnumerable<TEntity>> GetAll();
        Task<TEntity> GetById(int id);
        Task<TEntity> AddAsync(TEntity entity);
        Task UpdateAsync(TEntity entity);
        void Remove(TEntity entity);
    }
}
