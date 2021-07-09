﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Core.Requests.Identity
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Введите username")]
        public string Username { get; set; }


        [Required(ErrorMessage = "Введите пароль")]
        public string Password { get; set; }
    }
}
