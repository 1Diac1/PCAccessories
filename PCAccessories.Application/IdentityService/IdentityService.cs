using Microsoft.AspNetCore.Identity;
using PCAccessories.Application.UserRepository;
using PCAccessories.Core;
using PCAccessories.Core.Requests;
using PCAccessories.Core.Users;
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

        public IdentityService(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<AuthenticationResult> RegisterAsync(RegisterRequest request)
        {
            var existingUserByEmail = await _userManager.FindByEmailAsync(request.Email);

            if (existingUserByEmail != null)
                return new AuthenticationResult { Errors = new[] { "Пользователь с таким e-mail уже существует" } };

            if (request.Password != request.ConfirmPassword)
                return new AuthenticationResult { Errors = new[] { "Пароли не совпадают" } };

            var existingUserByUsername = await _userManager.FindByNameAsync(request.Username);

            if (existingUserByUsername != null)
                return new AuthenticationResult { Errors = new[] { "Пользователь с таким username уже существует" } };

            var user = new IdentityUser
            {
                Email = request.Email,
                UserName = request.Username
            };

            var createdUser = await _userManager.CreateAsync(user, request.Password);

            if (!createdUser.Succeeded)
                return new AuthenticationResult { Errors = createdUser.Errors.Select(x => x.Description) };

            return new AuthenticationResult { Success = true };
        }
    }
}
