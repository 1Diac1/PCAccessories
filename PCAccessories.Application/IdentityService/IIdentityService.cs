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
    public interface IIdentityService
    {
        Task<AuthenticationResult> RegisterAsync(RegisterRequest request);
    }
}
