using PCAccessories.Core;
using PCAccessories.Core.Requests;
using PCAccessories.Core.Requests.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.Services.IdentityService
{
    public interface IIdentityService
    {
        Task<AuthResult> RegisterAsync(RegisterRequest request);
        Task<AuthResult> LoginAsync(LoginRequest request);
        Task<AuthResult> RefreshTokenAsync(RefreshRequest request);
    }
}
