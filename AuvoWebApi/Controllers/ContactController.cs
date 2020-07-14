using Domain.Entities.Contacts;
using Domain.Services;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/v1/contacts")]
    public class ContactController : Controller
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet("all")]
        public IActionResult GetAll()
        {
            try
            {
                var response = _contactService.GetAll();
                return Ok(response);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpGet]
        public IActionResult Get([FromQuery] string id)
        {
            try
            {
                var response = _contactService.Get(id);
                return Ok(response);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPost]
        public IActionResult AddContact([FromBody] Contact contact)
        {
            try
            {
                var response = _contactService.AddContact(contact);
                return Ok(response);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPut]
        public IActionResult EditContact([FromBody] Contact contact)
        {
            try
            {
                _contactService.EditContact(contact);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

    }
}
