using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.Services.ProductRepository.Dto
{
    public class ProductDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ProductColor { get; set; }
        public bool IsAvailable { get; set; }
    }
}
