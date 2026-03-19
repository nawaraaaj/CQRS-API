using CollegeCQRS.Core.Interfaces;
using CollegeCQRS.Core.Models;
using MediatR;

namespace CollegeCQRS.Application.Features.Students.Commands.DeleteStudent
{
    public class DeleteStudentCommandHandler : IRequestHandler<DeleteStudentCommand, int>
    {
        private readonly IStudentRepository _studentRepository;
        public DeleteStudentCommandHandler(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<int> Handle(DeleteStudentCommand request, CancellationToken cancellationToken)
        {
            var student = await _studentRepository.GetByIdAsync(request.Id);
            if (student == null)
                return 0;

            await _studentRepository.DeleteAsync(request.Id);

            return request.Id;
        }
    }
}
