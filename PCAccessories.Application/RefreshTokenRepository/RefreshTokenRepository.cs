﻿using Microsoft.EntityFrameworkCore;
using PCAccessories.Core;
using PCAccessories.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.RefreshTokenRepository
{
    public class RefreshTokenRepository : IRefreshTokenRepository
    {
        private readonly UserContext _context;

        public RefreshTokenRepository(UserContext context)
        {
            _context = context;
        }

        public async Task Create(RefreshToken refreshToken)
        {
            refreshToken.Id = Guid.NewGuid();

            await _context.RefreshTokens.AddAsync(refreshToken);
        }

        public async Task Delete(Guid id)
        {
            var tokenId = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.Id == id);

            if (id != null)
                _context.RefreshTokens.Remove(tokenId);
        }

        public async Task DeleteAll(Guid userId)
        {
            var userTokensId = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.UserId == userId);

            if (userTokensId != null)
                _context.RefreshTokens.Remove(userTokensId);
        }

        public async Task<RefreshToken> GetByToken(string token)
        {
            var refreshToken = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.Token == token);

            return refreshToken;
        }
    }
}