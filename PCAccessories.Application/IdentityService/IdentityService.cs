using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using PCAccessories.Application.Authenticators;
using PCAccessories.Application.RefreshTokenRepository;
using PCAccessories.Application.TokenValidators;
using PCAccessories.Core;
using PCAccessories.Core.Requests;
using PCAccessories.Core.Responses;
using PCAccessories.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.IdentityService
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly Authenticator _authenticator;
        private readonly RefreshTokenValidator _refreshTokenValidator;
        private readonly IRefreshTokenRepository _refreshTokenRepository;
        private readonly UserContext _context;

        public IdentityService(
            UserManager<IdentityUser> userManager,
            Authenticator authenticator,
            RefreshTokenValidator refreshTokenValidator,
            IRefreshTokenRepository refreshTokenRepository, 
            UserContext context)
        {
            _userManager = userManager;
            _authenticator = authenticator;
            _refreshTokenValidator = refreshTokenValidator;
            _refreshTokenRepository = refreshTokenRepository;
            _context = context;
        }

        public async Task<AuthResult> RegisterAsync(RegisterRequest request)
        {
            var existingUserByEmail = await _userManager.FindByEmailAsync(request.Email);

            if (existingUserByEmail != null)
                return new AuthResult { Errors = new[] { "Пользователь с таким e-mail уже существует" } };

            if (request.Password != request.ConfirmPassword)
                return new AuthResult { Errors = new[] { "Пароли не совпадают" } };

            var existingUserByUsername = await _userManager.FindByNameAsync(request.Username);

            if (existingUserByUsername != null)
                return new AuthResult { Errors = new[] { "Пользователь с таким username уже существует" } };

            var user = new IdentityUser
            {
                Email = request.Email,
                UserName = request.Username
            };

            var createdUser = await _userManager.CreateAsync(user, request.Password);

            if (!createdUser.Succeeded)
                return new AuthResult { Errors = createdUser.Errors.Select(x => x.Description) };

            AuthUserResponse response = await _authenticator.Authenticate(user);

            return new AuthResult{ Success = true, AccessToken = response.AccessToken };
        }

        public async Task<AuthResult> LoginAsync(LoginRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.Username);

            if (user == null)
                return new AuthResult { Errors = new[] { "Пользователь не найден" } };

            var userHasValidPassword = await _userManager.CheckPasswordAsync(user, request.Password);

            if (userHasValidPassword == false)
                return new AuthResult { Errors = new[] { "Логин или пароль неверный" } };

            AuthUserResponse response = await _authenticator.Authenticate(user);

            return new AuthResult { Success = true, AccessToken = response.AccessToken, RefreshToken = response.RefreshToken };
        }

        public async Task<AuthResult> RefreshTokenAsync(RefreshRequest request)
        {
            bool isValidRefreshToken = _refreshTokenValidator.Validate(request.RefreshToken);

            if (!isValidRefreshToken)
                return new AuthResult { Errors = new[] { "Refresh токен недействителен" } };

            RefreshToken refreshTokenDTO = await _refreshTokenRepository.GetByToken(request.RefreshToken);

            if (refreshTokenDTO == null)
                return new AuthResult { Errors = new[] { "Refresh токен не найден" } };

            await _refreshTokenRepository.Delete(refreshTokenDTO.Id);

            var user = await _userManager.FindByIdAsync(refreshTokenDTO.UserId);

            if (user == null)
                return new AuthResult { Errors = new[] { "Пользователь не найден" } };

            AuthUserResponse response = await _authenticator.Authenticate(user);

            return new AuthResult { Success = true, AccessToken = response.AccessToken, RefreshToken = response.RefreshToken };
        }

    }
}
