using AddressBook.Core.Models;
using AddressBook.Data.Configurations;
using Microsoft.EntityFrameworkCore;

namespace AddressBook.Data
{
    public class ContactsDbContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ContactsDbContext(DbContextOptions<ContactsDbContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .ApplyConfiguration(new ContactConfiguration());

            builder.Entity<Contact>()
               .HasData(
                   new Contact { Id = 1, FirstName = "Clark", Surname = "Kent", Email = "superman@dccomics.com", Dob = "1900-01-01" },
                   new Contact { Id = 2, FirstName = "Bruce", Surname = "Wayne", Email = "batman@dccomics.com", Dob = "1900-01-01" },
                   new Contact { Id = 3, FirstName = "Diana", Surname = "Prince", Email = "wonder.woman@dccomics.com", Dob = "1900-01-01" },
                   new Contact { Id = 4, FirstName = "Tony", Surname = "Stark", Email = "ironman@marvel.com", Dob = "1900-01-01" },
                   new Contact { Id = 5, FirstName = "Peter", Surname = "Parker", Email = "spiderman@marvel.com", Dob = "1900-01-01" },
                   new Contact { Id = 6, FirstName = "Bruce", Surname = "Banner", Email = "hulk@marvel.com", Dob = "1900-01-01" },
                   new Contact { Id = 7, FirstName = "Steve", Surname = "Rogers", Email = "captain.america@marvel.com", Dob = "1900-01-01" });
        }
    }
}
