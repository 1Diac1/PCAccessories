using Microsoft.AspNetCore.Mvc;
using PCAccessories.Application.Authenticators;
using PCAccessories.Application.IdentityService;
using PCAccessories.Core.Requests;
using PCAccessories.Core.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Web.Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IIdentityService _identityService;
        private readonly Authenticator _authenticator;

        public AuthController(IIdentityService identityService, Authenticator authenticator)
        {
            _identityService = identityService;
            _authenticator = authenticator;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(new AuthFailedResponse { Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage)) });

            var authResponse = await _identityService.RegisterAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken });
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var authResponse = await _identityService.LoginAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken, RefreshToken = authResponse.RefreshToken });
        }

        
    }
}
