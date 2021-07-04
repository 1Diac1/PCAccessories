using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Core.Requests
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Введите usename")]
        public string Username { get; set; }


        [Required(ErrorMessage = "Введите пароль")]
        public string Password { get; set; }
    }
}
