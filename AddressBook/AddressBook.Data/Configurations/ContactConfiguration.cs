using AddressBook.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AddressBook.Data.Configurations
{
    public class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder
                .HasKey(m => m.Id);

            builder
                .Property(m => m.Id)
                .UseIdentityColumn();

            builder
                .Property(m => m.FirstName)
                .IsRequired()
                .HasMaxLength(100);

            builder
                .Property(m => m.Surname)
                .IsRequired()
                .HasMaxLength(100);

            builder
                .Property(m => m.Email)
                .IsRequired();

            builder
                .HasIndex(p => p.Email)
                .IsUnique();

            builder
                .Property(m => m.Dob)
                .IsRequired();
        }
    }
}
