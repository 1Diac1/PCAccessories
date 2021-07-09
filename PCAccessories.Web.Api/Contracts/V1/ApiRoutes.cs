using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Web.Api.Contracts.V1
{
    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/" + Version;

        public static class Auth
        {
            public const string Login = Base + "/auth/login";
            public const string Register = Base + "/auth/register";
            public const string Refresh = Base + "/auth/refresh";
        }
        
        public static class Product
        {
            public const string GetAll = Base + "/products";
            public const string Get = Base + "/product/{productId}";
            public const string Create = Base + "/product";
            public const string Update = Base + "/productupdate/{productId}";
            public const string Delete = Base + "/product/{productId}";

        }
    }
}
