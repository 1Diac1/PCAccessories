using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using PCAccessories.Application.Services.IdentityService;
using PCAccessories.Core.Requests;
using PCAccessories.Core.Requests.Identity;
using PCAccessories.Core.Responses;
using PCAccessories.Web.Api.Contracts.V1;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PCAccessories.Web.Api.Controllers.AuthController
{
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AuthController : Controller
    {
        private readonly IIdentityService _identityService;

        public AuthController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpPost(ApiRoutes.Auth.Register)]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(new AuthFailedResponse { Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage)) });

            var authResponse = await _identityService.RegisterAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken });
        }
         
        [HttpPost(ApiRoutes.Auth.Login)]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(new AuthFailedResponse { Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage)) });

            var authResponse = await _identityService.LoginAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken });
        }

        [HttpGet(ApiRoutes.Auth.Refresh)]
        public async Task<IActionResult> Refresh([FromBody] RefreshRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(new AuthFailedResponse { Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage)) });

            var authResponse = await _identityService.RefreshTokenAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken, RefreshToken = authResponse.RefreshToken });
        }
    }
}
