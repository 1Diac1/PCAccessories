using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Core.Requests.Product
{
    public class UpdateProductRequest
    {
        [Required(ErrorMessage = "Введите название")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Введите описание")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Введите цену")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "Укажите, товар в наличии или нет")]
        public bool IsAvailable { get; set; }
    }
}
