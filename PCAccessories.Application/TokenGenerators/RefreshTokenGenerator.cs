using PCAccessories.Helpers.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.TokenGenerators
{
    public class RefreshTokenGenerator
    {
        private readonly JWTConfiguration _jwtConfiguration;
        private readonly TokenGenerator _tokenGenerator;

        public RefreshTokenGenerator(JWTConfiguration jwtConfiguration, TokenGenerator tokenGenerator)
        {
            _jwtConfiguration = jwtConfiguration;
            _tokenGenerator = tokenGenerator;
        }

        public string GenerateToken()
        {
            return _tokenGenerator.GenerateToken(
                _jwtConfiguration.RefreshTokenSecret,
                _jwtConfiguration.Issuer,
                _jwtConfiguration.Audience,
                _jwtConfiguration.RefreshTokenExpirationMinutes);
        }
    }
}
