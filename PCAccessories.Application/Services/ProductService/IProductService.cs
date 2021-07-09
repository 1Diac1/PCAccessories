using PCAccessories.Application.Services.ProductRepository.Dto;
using PCAccessories.Core.Entities;
using PCAccessories.Core.Entities.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.Services.ProductService
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDto>> GetAllAsync();
        Task<Product> GetByIdAsync(Guid id);
        Task CreateAsync(Product product);
        Task UpdateAsync(Product product);
        Task<bool> DeleteAsync(Guid id);
    }
}
