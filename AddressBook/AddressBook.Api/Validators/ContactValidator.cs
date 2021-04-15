using AddressBook.Api.Resources;
using FluentValidation;
using System;

namespace AddressBook.Api.Validators
{
    public class ContactValidator : AbstractValidator<ContactResource>
    {
        public ContactValidator()
        {
            RuleFor(c => c.FirstName)
                .NotEmpty().WithMessage("First name is required")
                .MaximumLength(100).WithMessage("First name cannot be longer than 100 characters");

            RuleFor(c => c.Surname)
                .NotEmpty().WithMessage("Surname is required")
                .MaximumLength(100).WithMessage("Surname cannot be longer than 100 characters");

            RuleFor(s => s.Email)
                .NotEmpty().WithMessage("Email address is required")
                .EmailAddress().WithMessage("Valid email is required");

            RuleFor(s => s.Dob)
                .NotNull().WithMessage("Date of birth is required")
                .LessThan(_ => DateTime.Now).WithMessage("Date of birth should be in the past");
        }
    }
}
