using System.Collections.Generic;
using BharatLaw.Models;

namespace BharatLaw.Services
{
    public interface IResearchBookService
    {
        IEnumerable<ResearchBook> GetResearchBooks();
        ResearchBook GetResearchBook(int id);
        ResearchBook CreateResearchBook(ResearchBook researchBook);
        void UpdateResearchBook(int id, ResearchBook updatedResearchBook);
        void DeleteResearchBook(int id);
    }
}

