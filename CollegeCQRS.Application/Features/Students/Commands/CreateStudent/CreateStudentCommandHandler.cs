using CollegeCQRS.Core.Interfaces;
using CollegeCQRS.Core.Models;
using MediatR;

namespace CollegeCQRS.Application.Features.Students.Commands.CreateStudent
{
    public class CreateStudentCommandHandler : IRequestHandler<CreateStudentCommand, int>
    {
        private readonly IStudentRepository _studentRepository;
        public CreateStudentCommandHandler(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }
        public async Task<int> Handle(CreateStudentCommand request, CancellationToken cancellationToken)
        {
            var student = new Student
            {
                Name = request.Name,
                Age = request.Age,
                Address = request.Address
            };
            await _studentRepository.AddAsync(student);

            return student.Id;
        }
    }
}
