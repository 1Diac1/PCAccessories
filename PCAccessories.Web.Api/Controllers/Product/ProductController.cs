using Microsoft.AspNetCore.Mvc;
using PCAccessories.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PCAccessories.Core.Entities;
using PCAccessories.Application.Services.ProductService;
using Microsoft.AspNetCore.Identity;
using PCAccessories.Application.Services.ProductRepository.Dto;
using PCAccessories.Core.Requests.Product;

namespace PCAccessories.Web.Api.Controllers.Product
{
    [Route("api")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly UserManager<IdentityUser> _userManager;

        public ProductController(
            IProductService productService,
            UserManager<IdentityUser> userManager)
        {
            _productService = productService;
            _userManager = userManager;
        }

        [HttpGet("product/products")]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(await _productService.GetAllAsync());
        }

        [HttpGet("product/get")]
        public async Task<IActionResult> GetById([FromRoute] Guid productId)
        {
            var product = await _productService.GetByIdAsync(productId);

            if (product == null)
                return NotFound();

            return Ok(product);
        }

        [HttpPost("product/create")]
        public async Task<IActionResult> Create([FromBody] CreateProductRequest request)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var product = new PCAccessories.Core.Entities.Product()
            {
                Title = request.Title,
                Description = request.Description,
                Price = request.Price,
                ProductColor = request.ProductColor,
                IsAvailable = request.IsAvailable
            };

            await _productService.CreateAsync(product);

            return Ok();
        }

    }
}
