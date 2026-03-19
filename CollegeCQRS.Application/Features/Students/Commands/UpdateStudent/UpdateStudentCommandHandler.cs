using CollegeCQRS.Application.Features.Students.Commands.DeleteStudent;
using CollegeCQRS.Core.Interfaces;
using CollegeCQRS.Core.Models;
using MediatR;

namespace CollegeCQRS.Application.Features.Students.Commands.UpdateStudent
{
    public class UpdateStudentCommandHandler : IRequestHandler<UpdateStudentCommand, Student>
    {

        private readonly IStudentRepository _studentRepository;
        public UpdateStudentCommandHandler(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<Student> Handle(UpdateStudentCommand request, CancellationToken cancellationToken)
        {
            var student = await _studentRepository.GetByIdAsync(request.Id);
            if (student == null)
                return null;

            student.Name = request.Name;
            student.Age = request.Age;
            student.Address = request.Address;

            await _studentRepository.UpdateAsync(student);

            return student;
        }
    }
}
