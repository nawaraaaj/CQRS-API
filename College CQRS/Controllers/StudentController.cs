using CollegeCQRS.Application.Features.Students.Commands.CreateStudent;
using CollegeCQRS.Application.Features.Students.DTOs;
using CollegeCQRS.Application.Features.Students.Queries;
using CollegeCQRS.Application.Features.Students.Commands.DeleteStudent;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Cache;
using CollegeCQRS.Application.Features.Students.Commands.UpdateStudent;

namespace College_CQRS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IMediator _mediator;

        public StudentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        //create student // post
        [HttpPost]
        public async Task<IActionResult> CreateStudent([FromBody] CreateStudentDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var command = new CreateStudentCommand
            {
                Name = dto.Name,
                Age = dto.Age,
                Address = dto.Address
            };
            var createdId = await _mediator.Send(command);

            return CreatedAtAction(nameof(GetStudentById), new { id = createdId }, createdId);
        }

        //get all student
        [HttpGet]
        public async Task<IActionResult> GetAllStudent()
        {
            var query = new GetAllStudentQuery();
            var student = await _mediator.Send(query);

            if (student == null)
                return NotFound();

            return Ok(student);
        }

        //get by id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentById(int id)
        {
            var query = new GetStudentByIdQuery(id);
            var student = await _mediator.Send(query);

            if (student == null)
                return NotFound();

            return Ok(student);
        }

        //delete 
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var query = new DeleteStudentCommand(id);
            var deletedId = await _mediator.Send(query);

            return Ok(deletedId);
        }

        //update
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id)
        {
            var query = new UpdateStudentCommand(id);
            var update = await _mediator.Send(query);

            return Ok(update);
        }
    }
}
