using MediatR;

namespace CollegeCQRS.Application.Features.Students.Commands.CreateStudent
{
    public class CreateStudentCommand : IRequest<int>
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address {get; set;}
    }
}
