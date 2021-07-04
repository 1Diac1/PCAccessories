using PCAccessories.Core;
using PCAccessories.Core.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.IdentityService
{
    public interface IIdentityService
    {
        Task<AuthenticationResult> RegisterAsync(RegisterRequest request);
        Task<AuthenticationResult> LoginAsync(LoginRequest request);
    }
}
