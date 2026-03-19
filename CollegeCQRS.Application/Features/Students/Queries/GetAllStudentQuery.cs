using CollegeCQRS.Core.Models;
using MediatR;
using System.Collections.Generic;

namespace CollegeCQRS.Application.Features.Students.Queries
{
    public class GetAllStudentQuery : IRequest<IEnumerable<Student>>
    {
        
    }
}