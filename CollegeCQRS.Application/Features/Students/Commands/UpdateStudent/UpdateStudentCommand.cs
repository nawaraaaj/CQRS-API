using CollegeCQRS.Core.Models;
using MediatR;

namespace CollegeCQRS.Application.Features.Students.Commands.UpdateStudent
{
    public class UpdateStudentCommand : IRequest<Student>
    {
        public int Id;
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }

        public UpdateStudentCommand(int id)
        {
            Id = id;
        }
    }
}
