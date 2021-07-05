using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PCAccessories.Application.Authenticators;
using PCAccessories.Application.IdentityService;
using PCAccessories.Application.RefreshTokenRepository;
using PCAccessories.Application.TokenValidators;
using PCAccessories.Core;
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
        private readonly RefreshTokenValidator _refreshTokenValidator;
        private readonly IRefreshTokenRepository _refreshTokenRepository;
        private readonly UserManager<IdentityUser> _userManager;

        public AuthController(
            IIdentityService identityService,
            Authenticator authenticator,
            RefreshTokenValidator refreshTokenValidator,
            IRefreshTokenRepository refreshTokenRepository, 
            UserManager<IdentityUser> userManager)
        {
            _identityService = identityService;
            _authenticator = authenticator;
            _refreshTokenValidator = refreshTokenValidator;
            _refreshTokenRepository = refreshTokenRepository;
            _userManager = userManager;
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
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(new AuthFailedResponse { Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage)) });

            var authResponse = await _identityService.LoginAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            SetRefreshTokenInCookie("3213123");

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken, RefreshToken = authResponse.RefreshToken });
        }

        [HttpPost("refresh")]
        [AllowAnonymous]
        public async Task<IActionResult> Refresh([FromBody] RefreshRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(new AuthFailedResponse { Errors = ModelState.Values.SelectMany(x => x.Errors.Select(xx => xx.ErrorMessage)) });

            var authResponse = await _identityService.RefreshTokenAsync(request);

            if (!authResponse.Success)
                return BadRequest(new AuthFailedResponse { Errors = authResponse.Errors });

            return Ok(new AuthUserResponse { AccessToken = authResponse.AccessToken, RefreshToken = authResponse.RefreshToken });
        }

        [HttpGet("users")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllUsers()
        {
            List<string> list = new List<string>();

            for (int i = 0; i < 10; i++)
                list.Add(i.ToString());

            SetRefreshTokenInCookie("123");

            return Ok(list);
        }

        private void SetRefreshTokenInCookie(string refreshToken)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                MaxAge = TimeSpan.FromDays(90)
            };

            Response.Cookies.Append(".AspNetCore.Application.Id", refreshToken, cookieOptions); 
        }
    }
}
