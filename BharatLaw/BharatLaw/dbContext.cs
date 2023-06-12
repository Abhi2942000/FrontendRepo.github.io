using Microsoft.EntityFrameworkCore;
using BharatLaw.Models;
namespace BharatLaw
{
    public class dbContext : DbContext
    {
        public DbSet<ResearchBook> ResearchBooks { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("YourConnectionStringHere");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entity relationships and constraints here
            // This method is optional and can be used to define the database schema
        }
    }
}
