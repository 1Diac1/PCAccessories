using Microsoft.EntityFrameworkCore;
using PCAccessories.Core;
using PCAccessories.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.Repositories.RefreshTokenRepository
{
    public class RefreshTokenRepository : IRefreshTokenRepository
    {
        private readonly AppDbContext _context;

        public RefreshTokenRepository(Infrastructure.AppDbContext context)
        {
            _context = context;
        }

        public async Task Create(RefreshToken refreshToken)
        {
            refreshToken.Id = Guid.NewGuid();

            await _context.RefreshTokens.AddAsync(refreshToken);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(Guid id)
        {
            var tokenId = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.Id == id);

            if (id != null)
                _context.RefreshTokens.Remove(tokenId);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAll(Guid userId)
        {
            var userTokensId = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.UserId == userId.ToString());

            if (userTokensId != null)
                _context.RefreshTokens.Remove(userTokensId);

            await _context.SaveChangesAsync();
        }

        public async Task<RefreshToken> GetByToken(string token)
        {
            var refreshToken = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.Token == token);

            return refreshToken;
        }
    }
}
