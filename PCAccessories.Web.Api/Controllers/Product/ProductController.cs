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
using PCAccessories.Web.Api.Contracts.V1;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace PCAccessories.Web.Api.Controllers.Product
{
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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

        [HttpGet(ApiRoutes.Product.GetAll)]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(await _productService.GetAllAsync());
        }

        [HttpGet(ApiRoutes.Product.Get)]
        public async Task<IActionResult> GetById([FromRoute] Guid productId)
        {
            var product = await _productService.GetByIdAsync(productId);

            if (product == null)
                return NotFound();

            return Ok(product);
        }

        [HttpPost(ApiRoutes.Product.Create)]
        public async Task<IActionResult> Create([FromBody] CreateProductRequest request)
        {
            var product = new PCAccessories.Core.Entities.Product.Product()
            {
                Title = request.Title,
                Description = request.Description,
                Price = request.Price,
                IsAvailable = request.IsAvailable,
                CreationDate = DateTime.Now
            };

            if (product == null)
                return NotFound();

            await _productService.CreateAsync(product);

            return Ok();
        }

        [HttpPost(ApiRoutes.Product.Update)]
        public async Task<IActionResult> Update([FromRoute] Guid productId, [FromBody] UpdateProductRequest request)
        {
            var product = await _productService.GetByIdAsync(productId);

            if (product == null)
                return NotFound();

            product.Title = request.Title;
            product.Description = request.Description;
            product.Price = request.Price;
            product.IsAvailable = request.IsAvailable;
            product.ModificationDate = DateTime.Now;

            await _productService.UpdateAsync(product);

            return Ok();
        }

        [HttpPost(ApiRoutes.Product.Delete)]
        public async Task<IActionResult> Delete([FromRoute] Guid productId)
        {
            if (productId == null)
                return NotFound();

            var deleted = await _productService.DeleteAsync(productId);

            if (deleted)
                return Ok();

            return NotFound();
        }
    }
}
