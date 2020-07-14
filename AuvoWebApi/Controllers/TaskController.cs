using Domain.Services;
using Domain.Tasks;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/v1/tasks")]
    public class TaskController : Controller
    {
        private readonly ITaskService _taskService;


        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public IActionResult GetTasks()
        {
            try
            {
                var response = _taskService.GetAll();
                return Ok(response);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        [HttpPost] 
        public IActionResult AddTask([FromBody] Task task)
        {
            try
            {
                var response = _taskService.AddTask(task);
                return Ok(response);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }

        }

        [HttpPut("change")]
        public IActionResult ChangeStatus([FromBody] string id)
        {
            try
            {
                _taskService.ChangeStatus(id);
                return Ok();
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }
    }
}
