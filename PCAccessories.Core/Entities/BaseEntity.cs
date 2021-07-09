using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PCAccessories.Core.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }

        protected BaseEntity()
        {
            Id = Guid.NewGuid();
            CreationDate = DateTime.Now;
        }
    }
}
