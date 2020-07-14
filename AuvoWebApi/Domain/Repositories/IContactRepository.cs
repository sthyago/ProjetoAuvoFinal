using Domain.Entities.Contacts;
using System.Collections.Generic;

namespace Domain.Repositories
{
    public interface IContactRepository
    {
        bool Insert(Contact contact);
        void Update(Contact contact);
        IList<Contact> GetAll();
        bool Add(Contact contact);
        Contact GetById(string id);
    }
}
