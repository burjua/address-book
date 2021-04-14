using AddressBook.Api.Resources;
using AddressBook.Api.Validators;
using AddressBook.Core;
using AddressBook.Core.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AddressBook.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IContactsService _contactsService;

        public ContactsController(IContactsService contactsService, IMapper mapper)
        {
            this._mapper = mapper;
            this._contactsService = contactsService;
        }

        // GET: api/[controller]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactResource>>> GetAll()
        {
            var contacts = await _contactsService.GetAll();
            var resources = _mapper.Map<IEnumerable<Contact>, IEnumerable<ContactResource>>(contacts);
            return Ok(resources);
        }

        // GET: api/[controller]/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactResource>> GetById(int id)
        {
            var contact = await _contactsService.GetById(id);
            var resource = _mapper.Map<Contact, ContactResource>(contact);

            return Ok(resource);
        }

        // POST: api/[controller]
        [HttpPost]
        public async Task<ActionResult<ContactResource>> Post(ContactResource resource)
        {
            var validator = new ContactValidator();
            var validationResult = await validator.ValidateAsync(resource);

            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            var emailValidator = new NewContactEmailValidator(_contactsService);
            var emailValidationResult = await emailValidator.ValidateAsync(resource);

            if (!emailValidationResult.IsValid)
            {
                return BadRequest(emailValidationResult.Errors);
            }

            var entityToCreate = _mapper.Map<ContactResource, Contact>(resource);
            var createdEntity = await _contactsService.Create(entityToCreate);
            var createdResource = _mapper.Map<Contact, ContactResource>(createdEntity);
            return CreatedAtAction("POST", createdResource);
        }

        // PUT: api/[controller]/5
        [HttpPut("{id}")]
        public async Task<ActionResult<ContactResource>> Put(int id, ContactResource resource)
        {
            if (id != resource.Id)
            {
                return BadRequest();
            }

            var validator = new ContactValidator();
            var validationResult = await validator.ValidateAsync(resource);

            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            var emailValidator = new EditContactEmailValidator(_contactsService, resource.Id);
            var emailValidationResult = await emailValidator.ValidateAsync(resource);

            if (!emailValidationResult.IsValid)
            {
                return BadRequest(emailValidationResult.Errors);
            }

            var entityToUpdate = _mapper.Map<ContactResource, Contact>(resource);
            await _contactsService.Update(entityToUpdate);

            return NoContent();
        }
    }
}