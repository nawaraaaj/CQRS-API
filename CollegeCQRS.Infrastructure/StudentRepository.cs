using CollegeCQRS.Core.Interfaces;
using CollegeCQRS.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace CollegeCQRS.Infrastructure
{
    public class StudentRepository : IStudentRepository
    {
        private readonly AppDbContext _context;

        public StudentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
            return await _context.Student.ToListAsync();
        }

        public async Task<Student?> GetByIdAsync(int id)
        {
            return await _context.Student.FindAsync(id);
        }

        public async Task AddAsync(Student student)
        {
            await _context.Student.AddAsync(student);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Student student)
        {
            _context.Student.Update(student);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(int id)
        {
            var student = await _context.Student.FindAsync(id);
            if (student != null)
            {
                _context.Student.Remove(student);
                await _context.SaveChangesAsync();
            }
        }
    }
}