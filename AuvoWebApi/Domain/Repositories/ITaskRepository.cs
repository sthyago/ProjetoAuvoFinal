using Domain.Tasks;
using System.Collections.Generic;

namespace Domain.Repositories
{
    public interface ITaskRepository
    {
        bool Insert(Task task);
        Task GetTask(string id);
        IList<Task> GetTasks();
        void Update(Task task);
        bool Delete(string id);
    }
}
