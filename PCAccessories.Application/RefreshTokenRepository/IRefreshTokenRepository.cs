using PCAccessories.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Application.RefreshTokenRepository
{
    public interface IRefreshTokenRepository
    {
        Task<RefreshToken> GetByToken(string token);
        Task Create(RefreshToken refreshToken);
        Task Delete(Guid id);
        Task DeleteAll(Guid userId);
    }
}
