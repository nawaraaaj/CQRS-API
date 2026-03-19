using CollegeCQRS.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace CollegeCQRS.Infrastructure
{
    public class AppDbContext : DbContext
    {
        public DbSet<Student> Student { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base (options) { }
    }
}
