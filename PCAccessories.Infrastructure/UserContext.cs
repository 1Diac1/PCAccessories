using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using PCAccessories.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Infrastructure
{
    public class UserContext : IdentityDbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>.HasData(
                    new { Id = "1", Name = "Admin", NormalzedName = "ADMIN" },
                    new { Id = "2", Name = "Customer", NormalzedName = "CUSTOMER" },
                    new { Id = "1", Name = "Moderator", NormalzedName = "MODERATOR" });
        }

        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}
