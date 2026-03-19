using CollegeCQRS.Core.Interfaces;
using CollegeCQRS.Core.Models;
using MediatR;

namespace CollegeCQRS.Application.Features.Students.Queries
{
    public class GetAllStudentQueryHandler : IRequestHandler<GetAllStudentQuery, IEnumerable<Student>>
    {
        private readonly IStudentRepository _studentRepository;

        public GetAllStudentQueryHandler(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<IEnumerable<Student>> Handle(GetAllStudentQuery request, CancellationToken cancellationToken)
        {
            return await _studentRepository.GetAllAsync();
        }
    }
}