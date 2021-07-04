using Microsoft.AspNetCore.Identity;
using PCAccessories.Application.Authenticators;
using PCAccessories.Core;
using PCAccessories.Core.Requests;
using PCAccessories.Core.Responses;
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

        public IdentityService(UserManager<IdentityUser> userManager, Authenticator authenticator)
        {
            _userManager = userManager;
            _authenticator = authenticator;
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

            return new AuthResult{ AccessToken = response.AccessToken, RefreshToken = response.RefreshToken  };
        }

        public async Task<AuthResult> LoginAsync(LoginRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.Username);

            if (user == null)
                return new AuthResult { Errors = new[] { "Пользователь не найден" } };

            var userHasValidPassword = await _userManager.CheckPasswordAsync(user, request.Password);

            if (userHasValidPassword == false)
                return new AuthResult { Errors = new[] { "Логин или пароль неверный" } };

            return new AuthResult { Success = true };
        }
    }
}
