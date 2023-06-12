using BharatLaw.Models;
using BharatLaw.Services;
using System;
using System.Collections.Generic;



namespace BharatLaw.Services
{
    public class ResearchBookService : IResearchBookService
    {
        private readonly dbContext _dbContext;

        public ResearchBookService(dbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<ResearchBook> GetResearchBooks()
        {
            return _dbContext.ResearchBooks;
        }

        public ResearchBook GetResearchBook(int id)
        {
            return _dbContext.ResearchBooks.Find(id);
        }

        public ResearchBook CreateResearchBook(ResearchBook researchBook)
        {
            researchBook.DateCreated = DateTime.Now;
            researchBook.LastModified = DateTime.Now;

            _dbContext.ResearchBooks.Add(researchBook);
            _dbContext.SaveChanges();

            return researchBook;
        }

        public void UpdateResearchBook(int id, ResearchBook updatedResearchBook)
        {
            var researchBook = _dbContext.ResearchBooks.Find(id);
            if (researchBook != null)
            {
                researchBook.Name = updatedResearchBook.Name;
                researchBook.LastModified = DateTime.Now;

                _dbContext.SaveChanges();
            }
        }

        public void DeleteResearchBook(int id)
        {
            var researchBook = _dbContext.ResearchBooks.Find(id);
            if (researchBook != null)
            {
                _dbContext.ResearchBooks.Remove(researchBook);
                _dbContext.SaveChanges();
            }
        }
    }
}
