using PCAccessories.Application.Repositories.RefreshTokenRepository.TokenGenerators;
using PCAccessories.Application.Repositories.RefreshTokenRepository.TokenValidators;
using PCAccessories.Application.Repositories.RefreshTokenRepository.Authenticators;
using PCAccessories.Application.Repositories.RefreshTokenRepository;
using PCAccessories.Application.Services.IdentityService;
using PCAccessories.Application.Services.ProductService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using PCAccessories.Helpers.Authentication;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using PCAccessories.Infrastructure;
using AspNetCoreRateLimit;
using System.Text;
using System;

namespace PCAccessories.Web.Api
{
    public class Startup
    {
        private readonly string CorsName = "CorsPolicy";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddOptions();
            services.AddMemoryCache();

            services.AddCors(options =>
            {
                options.AddPolicy(CorsName, builder => builder
                    .WithOrigins("http://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            JWTConfiguration jwtConfiguration = new JWTConfiguration();
            Configuration.Bind("Authentication", jwtConfiguration);

            services.AddDbContext<AppDbContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<IdentityUser, IdentityRole>(options =>
                    {
                        options.SignIn.RequireConfirmedAccount = true;
                        options.Password.RequiredLength = 6;
                        options.Password.RequireNonAlphanumeric = false;
                        options.Password.RequireLowercase = true;
                        options.Password.RequireUppercase = true;
                        options.Password.RequireDigit = true;
                    })
                    .AddEntityFrameworkStores<AppDbContext>();

            services.Configure<IpRateLimitOptions>(Configuration.GetSection("IpRateLimiting"));
            services.Configure<IpRateLimitPolicies>(Configuration.GetSection("IpRateLimitPolicies"));

            services.AddSingleton(jwtConfiguration);
            services.AddScoped<Authenticator>();
            services.AddScoped<TokenGenerator>();
            services.AddScoped<AccessTokenGenerator>();
            services.AddScoped<RefreshTokenGenerator>();
            services.AddScoped<RefreshTokenValidator>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IIdentityService, IdentityService>();
            services.AddSingleton<IIpPolicyStore, MemoryCacheIpPolicyStore>();
            services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
            services.AddSingleton<IRateLimitConfiguration, RateLimitConfiguration>();
            services.AddSingleton<IProcessingStrategy, AsyncKeyLockProcessingStrategy>();
            services.AddSingleton<IRateLimitCounterStore, MemoryCacheRateLimitCounterStore>();

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }
            ).AddJwtBearer(o =>
            {
                o.RequireHttpsMetadata = false;
                o.SaveToken = true;
                o.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtConfiguration.AccessTokenSecret)),
                    ValidIssuer = jwtConfiguration.Issuer,
                    ValidAudience = jwtConfiguration.Audience,
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ClockSkew = TimeSpan.Zero
                };
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireAdministratorRole", policy => policy.RequireRole("Administrator"));
            });

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            // TODO: enable API request restrictions. app.UseIpRateLimiting();
            app.UseCors(CorsName);

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
