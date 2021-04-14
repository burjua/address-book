using AddressBook.Api.Resources;
using AddressBook.Core.Models;
using AutoMapper;

namespace AddressBook.Api.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Entity to Resource
            CreateMap<Contact, ContactResource>();

            // Resource to Entity
            CreateMap<ContactResource, Contact>();
        }
    }
}
