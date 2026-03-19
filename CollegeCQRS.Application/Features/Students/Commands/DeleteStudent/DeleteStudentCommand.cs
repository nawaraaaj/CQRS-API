using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollegeCQRS.Application.Features.Students.Commands.DeleteStudent
{
    public class DeleteStudentCommand : IRequest<int>
    {
        public DeleteStudentCommand(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
    }
}
