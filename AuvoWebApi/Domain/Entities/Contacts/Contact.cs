using Domain.ValueObjects;

namespace Domain.Entities.Contacts
{
    public class Contact : Entity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber{ get; set; }
        public bool isValid => Validate();

        private bool Validate()
        {
            return true;
        }
    }
}
