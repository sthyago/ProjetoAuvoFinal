using Domain.Tasks;
using System.Collections.Generic;

namespace Domain.Services
{
    public interface ITaskService
    {
        IList<Task> GetAll();

        bool AddTask(Task task);
        void ChangeStatus(string taskId);
    }
}
