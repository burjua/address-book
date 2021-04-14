using AddressBook.Api.Resources;
using AddressBook.Core;
using FluentValidation;

namespace AddressBook.Api.Validators
{
    public class EditContactEmailValidator : AbstractValidator<ContactResource>
    {
        public EditContactEmailValidator(IContactsService contactsService, int id)
        {
            RuleFor(c => c.Email)
                .Must(email => !contactsService.AnotherContactWithEmailExists(id, email)).WithMessage("Another contact with this email address already exists");
        }
    }
}
