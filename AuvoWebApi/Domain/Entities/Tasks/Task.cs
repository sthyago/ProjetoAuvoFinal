using Domain.ValueObjects;
using System;

namespace Domain.Tasks
{
    public class Task : Entity
    {
        public int Code { get; set; }
        public string Type { get; set; }
        public string Employee { get; set; }
        public bool Status { get; set; }
        public DateTime ExecutionDate { get; set; }
        public bool isValid => Validate();

        private bool Validate()
        {
            return true;
        }
    }
}
