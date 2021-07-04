using Microsoft.AspNetCore.Identity;
using PCAccessories.Helpers.Authentication;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.TokenGenerators
{
    public class AccessTokenGenerator
    {
        private readonly JWTConfiguration _jwtConfiguration;
        private readonly TokenGenerator _tokenGenerator;

        public AccessTokenGenerator(JWTConfiguration jwtConfiguration, TokenGenerator tokenGenerator)
        {
            _jwtConfiguration = jwtConfiguration;
            _tokenGenerator = tokenGenerator;
        }

        public string GenerateToken(IdentityUser user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim("id", user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName)
            };

            return _tokenGenerator.GenerateToken(
                _jwtConfiguration.AccessTokenSecret,
                _jwtConfiguration.Issuer,
                _jwtConfiguration.Audience,
                _jwtConfiguration.AccessTokenExpirationMinutes,
                claims);
        }
    }
}
