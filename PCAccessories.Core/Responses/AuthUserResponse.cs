using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace PCAccessories.Core.Responses
{
    public class AuthUserResponse
    {
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string AccessToken { get; set; }

        public string RefreshToken { get; set; }

    }
}
