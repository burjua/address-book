// <auto-generated />
using System;
using AddressBook.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace AddressBook.Data.Migrations
{
    [DbContext(typeof(ContactsDbContext))]
    [Migration("20210415145451_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.5")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AddressBook.Core.Models.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:IdentityIncrement", 1)
                        .HasAnnotation("SqlServer:IdentitySeed", 1)
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("Dob")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Contacts");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "superman@dccomics.com",
                            FirstName = "Clark",
                            Surname = "Kent"
                        },
                        new
                        {
                            Id = 2,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "batman@dccomics.com",
                            FirstName = "Bruce",
                            Surname = "Wayne"
                        },
                        new
                        {
                            Id = 3,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "wonder.woman@dccomics.com",
                            FirstName = "Diana",
                            Surname = "Prince"
                        },
                        new
                        {
                            Id = 4,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "ironman@marvel.com",
                            FirstName = "Tony",
                            Surname = "Stark"
                        },
                        new
                        {
                            Id = 5,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "spiderman@marvel.com",
                            FirstName = "Peter",
                            Surname = "Parker"
                        },
                        new
                        {
                            Id = 6,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "hulk@marvel.com",
                            FirstName = "Bruce",
                            Surname = "Banner"
                        },
                        new
                        {
                            Id = 7,
                            Dob = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "captain.america@marvel.com",
                            FirstName = "Steve",
                            Surname = "Rogers"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
