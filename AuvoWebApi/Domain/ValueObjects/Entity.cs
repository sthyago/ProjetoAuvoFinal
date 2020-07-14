using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.ValueObjects
{
    public class Entity
    {
        public Entity()
        {
            Id = Guid.NewGuid().ToString().Substring(0, 10);
        }
        [Key]
        public string Id { get; set; }
    }
}
