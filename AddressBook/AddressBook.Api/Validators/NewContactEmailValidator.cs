using AddressBook.Api.Resources;
using AddressBook.Core;
using FluentValidation;

namespace AddressBook.Api.Validators
{
    public class NewContactEmailValidator : AbstractValidator<ContactResource>
    {
        public NewContactEmailValidator(IContactsService contactsService)
        {
            RuleFor(c => c.Email)
                .Must(email => !contactsService.EmailExists(email)).WithMessage("Contact with this email address already exists");
        }
    }
 }
