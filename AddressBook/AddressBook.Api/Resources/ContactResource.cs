using System;

namespace AddressBook.Api.Resources
{
    // Representation of DB entity in case it contains fields that should not be exposed via api
    public class ContactResource
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public DateTime Dob { get; set; }
    }
}
