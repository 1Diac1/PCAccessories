using Microsoft.EntityFrameworkCore;
using PCAccessories.Application.Services.ProductRepository.Dto;
using PCAccessories.Core.Entities;
using PCAccessories.Core.Entities.Product;
using PCAccessories.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.Services.ProductService
{
    public class ProductService : IProductService
    {
        private readonly AppDbContext _context;

        public ProductService(AppDbContext context) => _context = context;

        public async Task<IEnumerable<ProductDto>> GetAllAsync()
        {
            var products = await _context.Products.Select(x => new ProductDto()
            {
                Title = x.Title,
                Description = x.Description,
                Price = x.Price,
                IsAvailable = x.IsAvailable
            }).ToListAsync();

            await _context.SaveChangesAsync();

            return products;
        }

        public async Task<Product> GetByIdAsync(Guid id) => await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

        public async Task CreateAsync(Product product)
        {
            if (product != null)
            {
                await _context.Products.AddAsync(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateAsync(Product product)
        {
            if (product != null)
            {
                _context.Entry(product).State = EntityState.Modified;
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(x => x.Id == id);

            if (product == null)
                return false;

            _context.Products.Remove(product);
            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }
    }
}
