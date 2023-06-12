using BharatLaw.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;


namespace BharatLaw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResearchBooksController : ControllerBase
    {
        private readonly List<ResearchBook> _researchBooks; // Replace with your data storage implementation

        public ResearchBooksController()
        {
            _researchBooks = new List<ResearchBook>();
        }

        // GET api/researchbooks
        [HttpGet]
        public ActionResult<IEnumerable<ResearchBook>> GetResearchBooks()
        {
            return _researchBooks;
        }

        // GET api/researchbooks/{id}
        [HttpGet("{id}")]
        public ActionResult<ResearchBook> GetResearchBook(int id)
        {
            var researchBook = _researchBooks.Find(rb => rb.Id == id);
            if (researchBook == null)
            {
                return NotFound();
            }

            return researchBook;
        }

        // POST api/researchbooks
        [HttpPost]
        public ActionResult<ResearchBook> CreateResearchBook([FromBody] ResearchBook researchBook)
        {
            researchBook.DateCreated = DateTime.Now;
            researchBook.LastModified = DateTime.Now;

            // Add the research book to your data storage
            // Example: _researchBooks.Add(researchBook);
            // Replace the above line with your data storage implementation

            return CreatedAtAction(nameof(GetResearchBook), new { id = researchBook.Id }, researchBook);
        }

        // PUT api/researchbooks/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateResearchBook(int id, [FromBody] ResearchBook updatedResearchBook)
        {
            var researchBook = _researchBooks.Find(rb => rb.Id == id);
            if (researchBook == null)
            {
                return NotFound();
            }

            researchBook.Name = updatedResearchBook.Name;
            researchBook.LastModified = DateTime.Now;

            // Update the research book in your data storage
            // Example: _researchBooks[_researchBooks.IndexOf(researchBook)] = researchBook;
            // Replace the above line with your data storage implementation

            return NoContent();
        }

        // DELETE api/researchbooks/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteResearchBook(int id)
        {
            var researchBook = _researchBooks.Find(rb => rb.Id == id);
            if (researchBook == null)
            {
                return NotFound();
            }

            // Remove the research book from your data storage
            // Example: _researchBooks.Remove(researchBook);
            // Replace the above line with your data storage implementation

            return NoContent();
        }
    }
}
