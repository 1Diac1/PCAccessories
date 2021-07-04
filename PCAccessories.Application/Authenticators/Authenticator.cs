﻿using Microsoft.AspNetCore.Identity;
using PCAccessories.Application.RefreshTokenRepository;
using PCAccessories.Application.TokenGenerators;
using PCAccessories.Core;
using PCAccessories.Core.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.Authenticators
{
    public class Authenticator
    {
        private readonly AccessTokenGenerator _accessTokenGenerator;
        private readonly RefreshTokenGenerator _refreshTokenGenerator;
        private readonly IRefreshTokenRepository _refreshTokenRepository;

        public Authenticator(
            AccessTokenGenerator accessTokenGenerator, 
            RefreshTokenGenerator refreshTokenGenerator, 
            IRefreshTokenRepository refreshTokenRepository)
        {
            _accessTokenGenerator = accessTokenGenerator;
            _refreshTokenGenerator = refreshTokenGenerator;
            _refreshTokenRepository = refreshTokenRepository;
        }

        public async Task<AuthUserResponse> Authenticate(IdentityUser user)
        {
            string accessToken = _accessTokenGenerator.GenerateToken(user);
            string refreshToken = _refreshTokenGenerator.GenerateToken();

            RefreshToken refreshTokenDTO = new RefreshToken 
            { 
                Token = refreshToken,
                UserId = Guid.Parse(user.Id)
            };

            await _refreshTokenRepository.Create(refreshTokenDTO);

            return new AuthUserResponse { AccessToken = accessToken, RefreshToken = refreshToken };
        }
    }
}
