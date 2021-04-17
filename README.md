# Address book

Sample address book application

## Project overview

### Server tech stack:

- .Net Core 3
- Entity Framework 5

### Server solution structure

- **AddressBook.Api**
  - _Point of access to the backend application, api controllers, mappings, validators._
- **AddressBook.Core**
  - _Core logic of application, contracts, interfaces etc._
- **AddressBook.Data**
  - _Data access layer._
- **AddressBook.Services**
  - _Business logic - for this level of complexity can be combined with Core project, but I moved this to a separate project to demonstrate the idea._

### UI tech stack

- Angular 10
- Ngrx 10
- Angular Material (for UI components)
- Bootstrap (for layout)

## Getting started

### Server:

- Restore NuGet packages
- Update connection string in `appsettings.Development.json` file
- Run `Update-Database` in Package Manager Console for AddressBook.Data project to create and seed DB
- Start with IIS Express
- Navigate to https://localhost:44323/api/contacts

### UI:

- Run `npm install`
- Make sure server is running on port **44323**
- Run `ng serve`
- Navigate to http://localhost:4200/
- Run unit tests with `ng test`
- Run lint with `ng lint`
