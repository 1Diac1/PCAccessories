using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Core.Requests
{
    public class RegisterRequest
    {
        [Required(ErrorMessage = "Введите e-mail")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Введите логин")]
        public string Username { get; set; }


        [Required(ErrorMessage = "Введите пароль")]
        public string Password { get; set; }


        [Required(ErrorMessage = "Введите пароль")]
        public string ConfirmPassword { get; set; }
    }
}
