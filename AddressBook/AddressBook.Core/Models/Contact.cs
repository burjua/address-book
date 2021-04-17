using System;

namespace AddressBook.Core.Models
{
    // DB entity representation
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Dob { get; set; }
    }
}
