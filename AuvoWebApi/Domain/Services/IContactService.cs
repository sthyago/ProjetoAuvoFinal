using Domain.Entities.Contacts;
using System.Collections.Generic;

namespace Domain.Services
{
    public interface IContactService
    {
        bool AddContact(Contact contact);
        IList<Contact> GetAll();
        Contact Get(string id);
        void EditContact(Contact contact);
    }
}
